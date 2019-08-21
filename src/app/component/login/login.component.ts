import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/Auth/auth.service';
import { Login } from '../../interfaces/app.interfaces'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api: AuthService, private router: Router, public dialog: MatDialog) { }

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  get email() { return this.login.get('email') }
  get password() { return this.login.get('password') }

  getEmailErrorMessage(): String {
    return this.email.hasError('required') ? 'Debe diligenciar este campo' :
      this.email.hasError('email') ? 'El correo no tiene un formato valido' : ''
  }

  getPasswordErrorMessage(): String {
    return this.password.hasError('required') ? 'Debe diligenciar este campo' : ""
  }

  onSubmit() {
    const user: Login = {
      email: this.email.value,
      password: this.password.value
    }

    this.api.login(user).subscribe((res) => {
      this.openDialog('check_circle', res.message);
      localStorage.setItem('token', res.token);
      this.router.navigate(['pwa']);
    }, error => {
      this.openDialog('error', error.message);
      console.log(error);
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
