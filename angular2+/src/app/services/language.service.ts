import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CategoryOrLang} from '../model/category-or-lang';

@Injectable()
export class LanguageService {

  private languages = 'http://localhost:8080/api/languages/';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': localStorage.getItem('token') })
  };
  getAll(): Observable<CategoryOrLang[]> {
    return this.http.get<CategoryOrLang[]>(this.languages, this.httpOptions);
  }

  add(language: CategoryOrLang): Observable<CategoryOrLang> {
    return this.http.post<CategoryOrLang>(this.languages, language, this.httpOptions);
  }

  edit(language: CategoryOrLang): Observable<CategoryOrLang> {
    return this.http.put<CategoryOrLang>(`${this.languages}${language.id}`, language, this.httpOptions);
  }

  delete(language: CategoryOrLang | number): Observable<CategoryOrLang> {
    const id = typeof language === 'number' ? language : language.id;
    return this.http.delete<CategoryOrLang>(`${this.languages}${id}`, this.httpOptions);
  }
}
