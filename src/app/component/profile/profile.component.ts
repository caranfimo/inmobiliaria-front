import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { RoleGuardService } from '../../services/Auth/role-guard.service'
import { UserRegister } from '../../interfaces/app.interfaces'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loggedUser: UserRegister;

  user = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  get first_name() {
    return this.user.get('first_name')
  }
  get last_name() {
    return this.user.get('last_name')
  }
  get email() {
    return this.user.get('email')
  }
  get password() {
    return this.user.get('password')
  }

  constructor(private auth: RoleGuardService) {
    this.loggedUser = auth.loggedUser().data.user;
    this.user.setValue({
      first_name: this.loggedUser.first_name,
      last_name:this.loggedUser.last_name,
      email: this.loggedUser.email,
      password: this.loggedUser.password
    })
  }

  getErrorMessage(field: string) {
    return this.user.get(field).hasError('required') ? 'Debe diligenciar este campo' :
      this.email.hasError('email') ? 'El correo no tiene un formato valido.' : ''
  }

  ngOnInit() {
  }

}
