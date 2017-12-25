import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Query} from '../model/query';
import {Observable} from 'rxjs/Observable';
import {ResultData} from '../model/result-data';
import {BoolQuery} from "../model/bool-query";

@Injectable()
export class SearchService {
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': localStorage.getItem('token') })
  };
  constructor(private http: HttpClient) {}

  search(query: Query): Observable<ResultData[]> {
    return this.http.post<ResultData[]>('/search', query, this.httpOptions);
  }
  searchBool(boolQuery: BoolQuery): Observable<ResultData[]> {
    return this.http.post<ResultData[]>('/searchb', boolQuery, this.httpOptions);
  }
}
