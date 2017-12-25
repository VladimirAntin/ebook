import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { saveAs } from 'file-saver';
import {Ebook} from '../model/ebook';
import {ResultData} from "../model/result-data";

@Injectable()
export class FileService {

  // private local = 'http://localhost:8080/';
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': localStorage.getItem('token'),
        'Accept': 'application/pdf'})
  };
  constructor(private http: HttpClient) { }
  downloadFile(filename: string) {
    this.http.get(filename, {headers: this.httpOptions.headers, responseType: 'blob'})
      .subscribe(data => {
        saveAs(data, filename.substr(6));
      }, () => {});
  }
  getBlob(ebook: Ebook) {
    this.http.get(ebook.filename, {headers: this.httpOptions.headers, responseType: 'blob'})
      .subscribe(data => {
        ebook.href = URL.createObjectURL(data);
      }, () => {});
  }
  getBlobResult(resultData: ResultData) {
    this.http.get(resultData.location, {headers: this.httpOptions.headers, responseType: 'blob'})
      .subscribe(data => {
        resultData.href = URL.createObjectURL(data);
      }, () => {});
  }

}
