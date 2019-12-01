package org.sf57.ebook.lucene.model;

import java.util.ArrayList;
import java.util.List;

public class BoolQuery {

    private List<SimpleQuery> queries = new ArrayList<>();
    private boolean must;

    public BoolQuery() { }

    public List<SimpleQuery> getQueries() {
        return queries;
    }

    public BoolQuery setQueries(List<SimpleQuery> queries) {
        this.queries = queries;
        return this;
    }

    public boolean isMust() {
        return must;
    }

    public BoolQuery setMust(boolean must) {
        this.must = must;
        return this;
    }
}
