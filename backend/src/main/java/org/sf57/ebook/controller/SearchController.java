package org.sf57.ebook.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.BooleanClause;
import org.apache.lucene.search.BooleanQuery;
import org.apache.lucene.search.Query;
import org.sf57.ebook.lucene.indexing.analysers.SerbianAnalyzer;
import org.sf57.ebook.lucene.model.*;
import org.sf57.ebook.lucene.search.QueryBuilder;
import org.sf57.ebook.lucene.search.ResultRetriever;
import org.sf57.ebook.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SearchController {

    @Autowired
    private IndexService indexService;


    @PostMapping(value="/search", consumes="application/json")
    public ResponseEntity searchall(@RequestBody SimpleQuery simpleQuery, Principal principal) throws Exception{
        Query query;
        if(simpleQuery.getNumQ()==1){
            query= QueryBuilder.buildQuery(SearchType.fuzzy, simpleQuery.getField(), simpleQuery.getValue());
        }else if(simpleQuery.getNumQ()==2){
            query= QueryBuilder.buildQuery(SearchType.prefix, simpleQuery.getField(), simpleQuery.getValue());
        }else if(simpleQuery.getNumQ()==3){
            query= QueryBuilder.buildQuery(SearchType.range, simpleQuery.getField(), simpleQuery.getValue());
        }else if(simpleQuery.getNumQ()==4){
            query= QueryBuilder.buildQuery(SearchType.phrase, simpleQuery.getField(), simpleQuery.getValue());
        }else{
            query= QueryBuilder.buildQuery(SearchType.regular, simpleQuery.getField(), simpleQuery.getValue());
        }
        List<RequiredHighlight> rh = new ArrayList<RequiredHighlight>();
        rh.add(new RequiredHighlight(simpleQuery.getField(), simpleQuery.getValue()));
        List<ResultData> results = ResultRetriever.getResults(query, rh);
        return new ResponseEntity(indexService.filter(results,principal.getName()), HttpStatus.OK);
    }

    @PostMapping(value="/searchb", consumes="application/json")
    public ResponseEntity searchBoolean(@RequestBody BoolQuery boolQuery,Principal principal) throws Exception {
        if(boolQuery.getQueries()==null || boolQuery.getQueries().isEmpty() || boolQuery.getQueries().size()>15){
            return ResponseEntity.badRequest().build();
        }
        List<Query> queries = new ArrayList<>();
        List<RequiredHighlight> rh = new ArrayList<RequiredHighlight>();
        for (SimpleQuery q:boolQuery.getQueries()) {
            queries.add(QueryBuilder.buildQuery(SearchType.regular, q.getField(),q.getValue()));
            rh.add(new RequiredHighlight(q.getField(), q.getValue()));
        }
        BooleanQuery.Builder builder=new BooleanQuery.Builder();
        BooleanClause.Occur option = boolQuery.isMust() ? BooleanClause.Occur.MUST : BooleanClause.Occur.SHOULD;
        for (Query q:queries) {
            builder.add(q, option);
        }
        Query query = builder.build();
        List<ResultData> results = ResultRetriever.getResults(query, rh);
        return new ResponseEntity(indexService.filter(results,principal.getName()), HttpStatus.OK);
    }

	
}
