import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { saveAs } from 'file-saver';
import {Ebook} from '../model/ebook';

@Injectable()
export class FileService {

  private local = 'http://localhost:8080/';
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': localStorage.getItem('token'),
        'Accept': 'application/pdf'})
  };
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

}
