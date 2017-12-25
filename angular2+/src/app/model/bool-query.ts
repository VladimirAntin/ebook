import {Query} from './query';

export class BoolQuery {
  queries: Query[];
  must: boolean;

  constructor() {
    this.queries = [];
    this.queries.push(new Query());
    this.must = false;
  }
}
