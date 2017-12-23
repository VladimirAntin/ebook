import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CategoryOrLang} from '../model/category-or-lang';
import {UserApi} from "../model/user-api";
import {Ebook} from "../model/ebook";

@Injectable()
export class CategoryService {

  private categories = 'http://localhost:8080/api/categories/';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': localStorage.getItem('token') })
  };
  getAll(): Observable<CategoryOrLang[]> {
    return this.http.get<CategoryOrLang[]>(this.categories, this.httpOptions);
  }

  add(category: CategoryOrLang): Observable<CategoryOrLang> {
    return this.http.post<CategoryOrLang>(this.categories, category, this.httpOptions);
  }

  edit(category: CategoryOrLang): Observable<CategoryOrLang> {
    return this.http.put<CategoryOrLang>(`${this.categories}${category.id}`, category, this.httpOptions);
  }

  get(id: number): Observable<CategoryOrLang>  {
    return this.http.get<CategoryOrLang>(`${this.categories}${id}`, this.httpOptions);
  }
  getEbooks(id: number): Observable<Ebook[]> {
    return this.http.get<Ebook[]>(`${this.categories}${id}/ebooks`, this.httpOptions);
  }

  getUsers(id: number): Observable<UserApi[]> {
    return this.http.get<UserApi[]>(`${this.categories}${id}/users`, this.httpOptions);
  }

  delete(category: CategoryOrLang | number): Observable<CategoryOrLang> {
    const id = typeof category === 'number' ? category : category.id;
    return this.http.delete<CategoryOrLang>(`${this.categories}${id}`, this.httpOptions);
  }

}
