import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms'
import { Plan, Task } from '../../interfaces/app.interfaces'
import { RoleGuardService } from '../../services/Auth/role-guard.service';
import { ApiService } from '../../services/api.service'
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss']
})
export class CreatePlanComponent implements OnInit {

  newPlan: FormGroup;
  tasks: FormArray;
  inCharge: boolean[] = [];
  id_types = [{
    name: "Cadula de ciudadania",
  }, {
    name: "Cedula de extrageria"
  }
  ]

  constructor(private fb: FormBuilder, private auth: RoleGuardService,
    private api: ApiService, public dialog: MatDialog) {
    this.newPlan = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      tasks: this.fb.array([]),
    })
  }

  createTask(): FormGroup {
    return this.fb.group({
      task_name: this.fb.control('', [Validators.required]),
      task_des: this.fb.control('', [Validators.required]),
      start_date: this.fb.control('', Validators.required),
      end_date: this.fb.control('', [Validators.required]),
      first_name: this.fb.control(''),
      last_name: this.fb.control(''),
      id_type: this.fb.control(''),
      id_number: this.fb.control(''),
    })
  }

  get name() {
    return this.newPlan.get('name');
  }



  addTask(): void {
    this.tasks = this.newPlan.controls.tasks as FormArray;
    this.tasks.push(this.createTask());
    this.inCharge.push(false);
  }

  changeInCharge(index: number): void {
    this.inCharge[index] = true;
  }

  onSubmit(): void {
    const loggedUser = this.auth.loggedUser().data.user;
    const user = {
      first_name: loggedUser.first_name,
      last_name: loggedUser.last_name,
      id_type: loggedUser.id_type,
      id_number: loggedUser.id_number
    }

    let task: Task[] = [];

    for (const iterator of this.tasks.value) {
      let nuevo: any = undefined;
      //Valida si hay un nuevo usuario
      if (iterator.first_name && iterator.last_name && iterator.id_number) {
        nuevo = {
          first_name: iterator.first_name,
          last_name: iterator.last_name,
          id_number: iterator.id_number,
          id_type: iterator.id_type
        }
      }
      //Lo agrega a un arreglo de tipo task
      task.push({
        description: iterator.task_des,
        name: iterator.task_name,
        extension: {
          start_date: iterator.start_date,
          end_date: iterator.end_date
        },
        is_completed: "no",
        user: nuevo ? nuevo : user,
      })
    }

    const newPlan: Plan = {
      name: this.name.value,
      duration: "asd",
      is_completed: "no",
      group: "wow",
      user: {
        task: task,
        first_name: user.first_name,
        last_name: user.last_name,
        id_type: user.id_type,
        id_number: user.id_number,
        user_rol: loggedUser.user_rol,
        amount_task: 10
      }
    }

    this.api.createPlan(newPlan).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.api.createTask(task).subscribe(res => {
        console.log(res);
      })
    },
      err => {
        console.log(err);
        this.openDialog('error', err.message);
      })


  }

  openDialog(icon: string, message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { icon, message }
    });
  }



  ngOnInit() {
  }

}
