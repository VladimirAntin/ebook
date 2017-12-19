import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Category} from '../model/category';

@Injectable()
export class CategoryService {

  private categories = 'http://localhost:8080/api/categories/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': localStorage.getItem('token') })
    };
    return this.http.get<Category[]>(this.categories, httpOptions);
  }

}
