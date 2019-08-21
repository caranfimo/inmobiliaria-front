import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Task } from '../../interfaces/app.interfaces';
import { RoleGuardService } from '../../services/Auth/role-guard.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() filterBy: number;

  tasks: Task[];
  user: any;
  userTasks: any;
  filterTask = [];

  constructor(private api: ApiService, private logged: RoleGuardService) {
    /*     this.api.getTasks().subscribe(res => {
          this.tasks = res.list;
        }) */
    this.user = logged.loggedUser().data.user;
    this.api.getPlanTask(this.user).subscribe(res => {
      this.userTasks = res.list.map(value => value.user.task);
      for (const tasks of this.userTasks) {
        this.filterTask = this.filterTask.concat(tasks)
      }
      this.userTasks = this.filterTask.map(value => value)
      console.log(this.userTasks)
    })
  }

  ngOnInit() {
  }

  filterByDate() {
    switch (this.filterBy) {
      case 1:
        this.filterTask = this.userTasks.filter(value => {
          const end_date = value.extension.end_date
          if (new Date(end_date).getTime() < new Date().getTime()) {
            return value
          }
        })
        console.log(this.filterTask)
        break;
      case 2:
        this.filterTask = this.userTasks.filter(value => {
          const end_date = value.extension.end_date
          if (new Date(end_date).getTime() == new Date().getTime()) {
            return value
          }
        })
        console.log(this.filterTask)
        break;
      case 3:
        this.filterTask = this.userTasks.filter(value => {
          const end_date = value.extension.end_date
          if (new Date(end_date).getTime() > new Date().getTime()) {
            return value
          }
        })
        console.log(this.filterTask)

        break;

      default:
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      if (curVal != prevVal) {
        this.filterByDate();
      }
    }
  }
}
