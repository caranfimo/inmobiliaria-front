import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RoleGuardService } from '../../services/Auth/role-guard.service'
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  user_id:string;
  plans:any;

  constructor(private api:ApiService, private logged:RoleGuardService, public dialog: MatDialog,  private router:Router) {
    this.user_id = logged.loggedUser().data.user.id_number;
    this.api.getPlansByUser( this.user_id ).subscribe(res=>{
      this.plans = res.list;
      console.log(this.plans)
    }, err => {
      this.openDialog('error', err.error.message);
    })
  }

  redirectTo( plan:any ){
    this.router.navigate([`pwa/control/plan-detail/${plan._id}`, {plan:JSON.stringify(plan)}]);
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
