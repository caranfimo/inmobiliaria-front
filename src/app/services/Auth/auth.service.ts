import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../interfaces/app.interfaces'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = environment.url;

  private jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  public login(user:Login): Observable<any>{
    return this.http.post(`${this.url}auth/login`, user);
  }

  
}