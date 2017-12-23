import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  get() {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': localStorage.getItem('token'),
        'Accept': 'application/pdf'})
    };
    this.http.get('http://localhost:8080/files/Vezbe4.pdf', {headers: httpOptions.headers, responseType: 'blob'})
      .subscribe(data => {
          this.url = URL.createObjectURL(data);
          // window.open(url, '_blank');
          // saveAs(data);
        }, err => {
          console.log(err);
        });
  }

  openlink(link) {
    window.open(link, '_blank');
  }
}
