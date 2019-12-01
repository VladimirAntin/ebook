package org.sf57.ebook.lucene.model;

public class SimpleQuery {
	
	private String field;
	private String value;
	private int numQ;
	
	public SimpleQuery() {
		super();
	}
	public String getField() {
		return field;
	}
	public void setField(String field) {
		this.field = field;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}

	public int getNumQ() {
		return numQ;
	}

	public SimpleQuery setNumQ(int numQ) {
		this.numQ = numQ;
		return this;
	}
}
