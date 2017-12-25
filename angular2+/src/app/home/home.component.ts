import {Component, OnInit} from '@angular/core';
import { saveAs } from 'file-saver';
import {Query} from '../model/query';
import {SearchService} from '../services/search.service';
import {ResultData} from '../model/result-data';
import {MatSnackBar} from '@angular/material';
import {FileService} from '../services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fields = ['title', 'author', 'keyword', 'text', 'language' ];
  queries = [ 'Regular', 'Fuzzy', 'Pharse', 'Range', 'Prefix'];

  result: ResultData[] = [];
  boolquery = false; query = new Query();
  constructor(private searchService: SearchService, private snackBar: MatSnackBar, private fileService: FileService) { }

  ngOnInit() { }

  changeQuery(v) {
    this.boolquery = !v;
  }

  openPdf(link) { window.open(link, '_blank'); }
  download(filename: string) { this.fileService.downloadFile(filename); }

  search() {
    this.searchService.search(this.query).subscribe(data => {
      this.result = data;
      if (this.result.length === 0) {
        this.snackBar.open('Result is empty, try again!', 'Ok', {
          duration: 4000, verticalPosition: 'top'
        });
      }else {
        this.result.forEach((value, index) => {
          this.fileService.getBlobResult(this.result[index]);
          this.result[index].highlight = this.result[index].highlight.split('\n').join('</br>');
        });
      }
    },  () => {
      this.snackBar.open('Error with your query, try again!', 'Ok', {
        duration: 4000, verticalPosition: 'top'
      });
    });
  }
}
