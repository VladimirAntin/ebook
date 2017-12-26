import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {UserLogin} from '../model/user-login';
import {Observable} from 'rxjs/Observable';
import {NavItem} from '../model/nav-item';
import { UserApi } from '../model/user-api';

@Injectable()
export class AuthService {

  // private auth = 'http://localhost:8080/auth/';
  // private api = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  loginPost(user: User): Observable<UserLogin> {
    const body = `username=${user.username}&password=${user.password}`;
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    return this.http.post<UserLogin>('/auth/login', body, httpOptions);
  }
  setToken(data) {
    localStorage.setItem('token', `jwt ${data.access_token}`);
  }
  removeToken(): void {
    localStorage.removeItem('token');
    this.getDefault();
  }
  logout() {
    const token = localStorage.getItem('token');
    this.removeToken();
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': token })
    };
    this.http.get('/auth/logout', httpOptions).subscribe(() => {
      setTimeout(() => window.location.reload(), 1000);
    }, () => {});

  }
  private getDefault() {
    if (!localStorage.getItem('token')) {
      this.http.get<UserLogin>('/api/get').subscribe(data => this.setToken(data));
    }
  }
  check(): Observable<any> {
    this.getDefault();
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': localStorage.getItem('token') })
    };
    return this.http.get('/api/check', httpOptions);
  }
  me(): Observable<UserApi> {
    this.getDefault();
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': localStorage.getItem('token') })
    };
    return this.http.get<UserApi>('/api/me', httpOptions);
  }
  nav_items(): Observable<NavItem[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': localStorage.getItem('token') })
    };
    return this.http.get<NavItem[]>('/api/nav_items', httpOptions);
  }

}
