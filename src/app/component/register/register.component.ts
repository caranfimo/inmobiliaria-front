import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserRegister } from '../../interfaces/app.interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private api:ApiService, private router:Router, public dialog:MatDialog) { }

  registerForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    id_type: new FormControl('', [Validators.required]),
    id_number: new FormControl('', [Validators.required, Validators.min(1000000), Validators.max(9999999999)]),
    gender: new FormControl('', [Validators.required]),
    born_date: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  get first_name() {
    return this.registerForm.get('first_name')
  }
  get last_name() {
    return this.registerForm.get('last_name')
  }
  get id_type() {
    return this.registerForm.get('id_type')
  }
  get id_number() {
    return this.registerForm.get('id_number')
  }
  get gender() {
    return this.registerForm.get('gender')
  }
  get born_date() {
    return this.registerForm.get('born_date')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get password() {
    return this.registerForm.get('password')
  }

  getErrorMessage(field: string) {
    return this.registerForm.get(field).hasError('required') ? 'Debe diligenciar este campo' : 
    this.id_number.hasError('min') ? 'El numero de coumento debe tener al menos 7 caracteres' : 
    this.id_number.hasError('max') ? 'El numero de coumento debe tener maximo 10 caracteres' : 
    this.email.hasError('email') ? 'El correo no tiene un formato valido.': ''
  }

  onSubmit(){
    const newUser:UserRegister = {
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      id_type: this.id_type.value,
      id_number: this.id_number.value,
      gender: this.gender.value,
      born_date: this.born_date.value,
      email: this.email.value,
      password: this.password.value
    }
    this.api.registerNewUser(newUser).subscribe(res =>{
      this.openDialog('check_circle', res.message);
      this.router.navigate(['login']);
    },
    err =>{
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
