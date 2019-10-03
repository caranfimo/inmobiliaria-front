import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  //Registros actuales
  rolTypes: Array<any>;
  estateTypes: Array<any>;
  planStates: Array<any>;
  comercialActivities: Array<any>;
  userStates: Array<any>;
  taskStates: Array<any>;

  //Nuevos registros
  newRol: string;
  newEstate: string;
  newPlanState: string;
  newComercialActivity: string;
  newUserState: string;
  newTaskState: string;


  constructor(private api: ApiService, public dialog:MatDialog) {
    //GET Roles
    this.api.getUserDefinitions().subscribe((res) => {
      this.rolTypes = res.list;
    });
    //GET Tipos de propiedad
    this.api.getEstateTypeDefinitions().subscribe((res) => {
      this.estateTypes = res.list;
    });
    //GET Plan Estate
    this.api.getPlanStateDefinitions().subscribe(res => {
      this.planStates = res.list;
    })
    //GET Comercial Activity
    this.api.getComercialActivityDefinitions().subscribe(res => {
      this.comercialActivities = res.list;
    })
    //GET User States
    this.api.getUserStateDefinitions().subscribe(res => {
      this.userStates = res.list;
    })
    //GET Task states
    this.api.getTaskStateDefinitions().subscribe(res => {
      this.taskStates = res.list;
    })
  }

  /**
   * ROLES DE USUARIO
   */

  setNewUserDefinition() {
    console.log(this.newRol);
    this.api.setNewUserDefinition(this.newRol).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.rolTypes.push(res.created);
    },
      err => {
        this.openDialog('error', err.message);
        console.log(err.err);
      }
    );
  }
  deleteUserDefinition(index: number) {
    this.api.deleteUserDefinition(this.rolTypes[index]._id).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.rolTypes.splice(index, 1);
    })
  }


  /**
   * TIPO DE INMUEBLE
   */

  setNewEstateTypeDefinition() {
    this.api.setNewEstateTypeDefinition(this.newEstate).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.estateTypes.push(res.created);
    },
      err => {
        this.openDialog('error', err.message);
        console.log(err.err);
      }
    );
  }
  deleteEstateTypeDefinition(index: number) {
    this.api.deleteEstateTypeDefinition(this.estateTypes[index]._id).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.estateTypes.splice(index, 1);
    })
  }

  /**
 * TIPO DE PLAN
 */

  setNewPlanStateDefinition() {
    this.api.setNewPlanStateDefinition(this.newPlanState).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.planStates.push(res.created);
    },
      err => {
        this.openDialog('error', err.message);
        console.log(err.err);
      }
    );
  }
  deletePlanStateDefinition(index: number) {
    this.api.deletePlanStateDefinition(this.planStates[index]._id).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.planStates.splice(index, 1);
    })
  }

  /**
   * TIPOS DE ACTIVIDAD COMERCIAL
   */
  setNewComercialActivityDefinition() {
    this.api.setNewComercialActivityDefinition(this.newComercialActivity).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.comercialActivities.push(res.created);
    },
      err => {
        this.openDialog('error', err.message);
        console.log(err.err);
      }
    );
  }
  deleteComercialActivityDefinition(index: number) {
    this.api.deleteComercialActivityDefinition(this.comercialActivities[index]._id).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.comercialActivities.splice(index, 1);
    })
  }

  /**
   * tIPOS DE ESTADO DE USUARIO
   */

  setNewUserStateDefinition() {
    this.api.setNewUserStateDefinition(this.newUserState).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.userStates.push(res.created);
    },
      err => {
        this.openDialog('error', err.message);
        console.log(err.err);
      }
    );
  }
  deleteUserStateDefinition(index: number) {
    this.api.deleteUserStateDefinition(this.userStates[index]._id).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.userStates.splice(index, 1);
    })
  }

  /**
   * TIPOS DE ESTADO DE TAREAS
   */

  setNewTaskStateDefinition() {
    this.api.setNewTaskStateDefinition(this.newTaskState).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.taskStates.push(res.created);
    },
      err => {
        this.openDialog('error', err.message);
        console.log(err.err);
      }
    );
  }
  deleteTaskStateDefinition(index: number) {
    this.api.deleteTaskStateDefinition(this.taskStates[index]._id).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.taskStates.splice(index, 1);
    })
  }

/**
 * Metodo de apertura de dialogo
 * @param icon Icono que se mostarra en el dialogo, estos se ven en MAterial Icon
 * @param message Mensaje que responde el servicip
 */
  openDialog(icon: string, message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { icon, message }
    });
  }

  ngOnInit() {
  }

}
