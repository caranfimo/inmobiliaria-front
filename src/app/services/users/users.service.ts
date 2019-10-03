import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister, Propiedad, Task, Plan } from '../../interfaces/app.interfaces'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  url = environment.url;

  getUsers() {
    return this.http.get(`${this.url}user/users`, { headers: {'Authorization':localStorage.getItem("token")}});
  }
}
