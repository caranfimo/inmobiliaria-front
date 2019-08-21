import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent implements OnInit {

  tasks: any;
  user: any;
  filter: number = 4;
  filterTask: any;

  constructor(private router: ActivatedRoute, private api:ApiService, public dialog: MatDialog) {
    this.router.params.subscribe(res => {
      this.user = JSON.parse(res.plan);
      this.tasks = this.user.user.task;
      this.all();
    })
  }

  isExpired(task): boolean {
    const task_daten = new Date(task.extension.end_date).getTime();
    if (task_daten < Date.now() && task.is_completed === 'no') {
      return true;
    } else {
      return false
    }
  }

  completeFilter(): void {
    this.filter = 3
    this.filterTask = this.tasks.filter(task => {
      if (task.is_completed === 'yes') {
        return task;
      }
    })

    if(!this.filterTask[0]){
      this.filterTask = [];
    }

  }

  expiredFilter(): void {
    this.filter = 1
    this.filterTask = this.tasks.filter(task => {
      const task_date = new Date(task.extension.end_date).getTime();
      if (task_date < Date.now() && task.is_completed === 'no') {
        return task;
      }
    })

    if(!this.filterTask[0]){
      this.filterTask = [];
    }

  }

  actuallFilter(): void {
    this.filter = 2
    this.filterTask = this.tasks.filter(task => {
      if (task.is_completed === 'no') {
        return task;
      }
    })

    if(!this.filterTask[0]){
      this.filterTask = [];
    }

  }

  all(): void {
    this.filter = 4
    this.filterTask = this.tasks.filter(task => {
      return task
    })

    if(!this.filterTask[0]){
      this.filterTask = [];
    }

  }

  complete(find){
    for (const task of this.tasks) {
      if(task._id == find._id){
        task.is_completed = 'yes';
      }
    }

    this.user.user.task = this.tasks;
    this.api.updatePlan(this.user).subscribe(res=>{
      console.log(res);
      this.openDialog('check_circle', res.message);
    }, (error)=>{
      this.openDialog('error', error.error.message);
    })

    switch (this.filter) {
      case 1:
        this.expiredFilter()
        break;
      case 2:
        this.actuallFilter()
        break;
      case 3:
        this.completeFilter()
        break;
      case 4:
        this.all()
        break;
    }
  }

  chipColor(task){
    if(task.is_completed === 'no'){
      return 'warn'
    }else{
      return 'primary'
    }
  }

  openDialog(icon: string, message: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { icon, message }
    });
  }



  ngOnInit() {
  }

}
