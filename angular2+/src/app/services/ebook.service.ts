import { Injectable } from '@angular/core';
import {Ebook} from '../model/ebook';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CategoryOrLang} from "../model/category-or-lang";

@Injectable()
export class EbookService {

  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': localStorage.getItem('token') })
  };
  private ebooks = '/api/ebooks/';
  constructor(private http: HttpClient) { }

  checkUploadEbook(file: File): Observable<Ebook> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<Ebook>(`${this.ebooks}upload`, formData, this.httpOptions);
  }
  add(file: File, ebook: Ebook): Observable<Ebook> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('title', ebook.title);
    formData.append('author', ebook.author);
    formData.append('publicationYear', String(ebook.publicationYear));
    formData.append('keywords', ebook.keywords);
    formData.append('category', String(ebook.category));
    formData.append('language', String(ebook.language));
    return this.http.post<Ebook>(`${this.ebooks}`, formData, this.httpOptions);
  }
  delete(ebook: Ebook | number): Observable<Ebook> {
    const id = typeof ebook === 'number' ? ebook : ebook.id;
    return this.http.delete<Ebook>(`${this.ebooks}${id}`, this.httpOptions);
  }

  edit(ebook: Ebook): Observable<Ebook> {
    return this.http.put<Ebook>(`${this.ebooks}${ebook.id}`, ebook, this.httpOptions);
  }
}
