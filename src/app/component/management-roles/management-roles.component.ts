import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { RoleGuardService } from '../../services/Auth/role-guard.service';
import { UserRegister } from 'src/app/interfaces/app.interfaces';


export interface PeriodicElement {
  position: number;
  name: string;  
  administrador: boolean;
  comerciante: boolean;
  vendedor: boolean;
}

let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-management-roles',
  templateUrl: './management-roles.component.html',
  styleUrls: ['./management-roles.component.scss']
})

export class ManagementRolesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'administrador', 'comerciante', 'vendedor'];
  dataSource = [];
  user: UserRegister;
  users: UserRegister[];

  constructor(private userService:UsersService, private logged:RoleGuardService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.users = res['list'] as UserRegister[];
      console.log(this.users);
      let i=0;
      for (const usuario of this.users) {
        ELEMENT_DATA.push({position: (i+1), name: usuario.first_name+' '+usuario.last_name, administrador: false, comerciante: false, vendedor: false});
        i++;
      }
      this.dataSource = ELEMENT_DATA;
    });
  }

}
