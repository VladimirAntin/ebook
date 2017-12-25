import {Component, OnInit} from '@angular/core';
import { saveAs } from 'file-saver';
import {Query} from '../model/query';
import {SearchService} from '../services/search.service';
import {ResultData} from '../model/result-data';
import {MatSnackBar} from '@angular/material';
import {FileService} from '../services/file.service';
import {BoolQuery} from '../model/bool-query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fields = ['title', 'author', 'keyword', 'text', 'language' ];
  queries = [ 'Regular', 'Fuzzy', 'Pharse', 'Range', 'Prefix'];

  result: ResultData[] = [];   must = false;
  queryType = false; query = new Query();
  boolQuery = new BoolQuery();
  constructor(private searchService: SearchService, private snackBar: MatSnackBar, private fileService: FileService) { }

  ngOnInit() { }

  changeQueryType(v) { this.queryType = !v; }
  changeQuery(v) { this.must = !v; }

  openPdf(link) { window.open(link, '_blank'); }
  download(filename: string) { this.fileService.downloadFile(filename); }

  search(bool) {
    let queryTypeReturnService;
    if (bool) {
      queryTypeReturnService = this.searchService.searchBool(this.boolQuery);
    }else {
      queryTypeReturnService = this.searchService.search(this.query);
    }
    queryTypeReturnService.subscribe(data => {
      this.result = data;
      if (this.result.length === 0) {
        this.snackBar.open('Result is empty, try again!', 'Ok', {
          duration: 4000, verticalPosition: 'top'
        });
      }else {
        this.result.forEach((value, index) => {
          this.fileService.getBlobResult(this.result[index]);
          this.result[index].highlight = this.result[index].highlight.split('\n').join('</br>');
          this.result[index].highlight = this.result[index].highlight.replace('null', '');
        });
      }
    },  () => {
      this.snackBar.open('Error with your query, try again!', 'Ok', {
        duration: 4000, verticalPosition: 'top'
      });
    });
  }

  addField() { this.boolQuery.queries.push(new Query()); }
  removeField(b) {
    const index = this.boolQuery.queries.indexOf(b);
    this.boolQuery.queries.splice(index, 1);
  }

  isValidBool() {return this.boolQuery.queries.filter((v) => v.value.trim() === '').length > 0; }

}
