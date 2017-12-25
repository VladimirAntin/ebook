import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserApi} from '../model/user-api';
import {UserPassword} from '../model/user-password';

@Injectable()
export class UserService {

  private users = '/api/users/';
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': localStorage.getItem('token') })
  };
  getAll(): Observable<UserApi[]> {
    return this.http.get<UserApi[]>(this.users, this.httpOptions);
  }
  delete (user: UserApi | number): Observable<UserApi> {
    const id = typeof user === 'number' ? user : user.id;
    return this.http.delete<UserApi>(`${this.users}${id}`, this.httpOptions);
  }
  add(user: UserApi): Observable<UserApi>  {
    return this.http.post<UserApi>(this.users, user, this.httpOptions);
  }
  get(id: number | string): Observable<UserApi>  {
    const byUsername = typeof id === 'number' ? false : true;
    if (byUsername) {
      return this.http.get<UserApi>(`${this.users}u=${id}`, this.httpOptions);
    }else {
      return this.http.get<UserApi>(`${this.users}${id}`, this.httpOptions);
    }
  }
  update(user: UserApi) {
    return this.http.put<UserApi>(`${this.users}${user.id}`, user, this.httpOptions);
  }
  changePassword(id: number, user: UserPassword) {
    return this.http.patch(`${this.users}${id}/password`, user, this.httpOptions);
  }
}
