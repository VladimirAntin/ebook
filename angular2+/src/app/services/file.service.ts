import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { saveAs } from 'file-saver';
import {Ebook} from "../model/ebook";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FileService {
  httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': localStorage.getItem('token'),
        'Accept': 'application/pdf'})
  };
  local = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  downloadFile(filename: string) {
    this.http.get(`${this.local}${filename}`, {headers: this.httpOptions.headers, responseType: 'blob'})
      .subscribe(data => {
        saveAs(data, filename.substr(6));
      }, () => {});
  }

  getBlob(ebook: Ebook) {
    this.http.get(`${this.local}${ebook.filename}`, {headers: this.httpOptions.headers, responseType: 'blob'})
      .subscribe(data => {
        ebook.href = URL.createObjectURL(data);
      }, () => {});
  }

  checkUploadEbook(file: File): Observable<Ebook> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const httpOptionsUpload = {
      headers: new HttpHeaders(
        { 'Authorization': localStorage.getItem('token'), 'Accept': 'application/json'})
    };
    return this.http.post<Ebook>(`${this.local}api/ebooks/upload`, formData, httpOptionsUpload);
  }

}
