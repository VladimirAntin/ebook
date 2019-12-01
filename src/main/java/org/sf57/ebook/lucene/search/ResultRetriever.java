package org.sf57.ebook.lucene.search;

import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopScoreDocCollector;
import org.apache.lucene.search.highlight.Highlighter;
import org.apache.lucene.search.highlight.InvalidTokenOffsetsException;
import org.apache.lucene.search.highlight.QueryScorer;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.SimpleFSDirectory;
import org.sf57.ebook.lucene.indexing.analysers.SerbianAnalyzer;
import org.sf57.ebook.lucene.indexing.handlers.*;
import org.sf57.ebook.lucene.model.RequiredHighlight;
import org.sf57.ebook.lucene.model.ResultData;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.ResourceBundle;

public class ResultRetriever {
	
	private TopScoreDocCollector collector;
	private static int maxHits = 10;

	private static String indexRes = ResourceBundle.getBundle("application").getString("index");
	
	public ResultRetriever(){
		collector=TopScoreDocCollector.create(10);
	}
	
	public static void setMaxHits(int maxHits) {
		ResultRetriever.maxHits = maxHits;
	}

	public static int getMaxHits() {
		return ResultRetriever.maxHits;
	}

	public static List<ResultData> getResults(Query query,
											  List<RequiredHighlight> requiredHighlights) {
		if (query == null) {
			return null;
		}
		try {
			Directory indexDir = new SimpleFSDirectory(FileSystems.getDefault().getPath(indexRes));
			DirectoryReader reader = DirectoryReader.open(indexDir);
			IndexSearcher is = new IndexSearcher(reader);
			TopScoreDocCollector collector = TopScoreDocCollector.create(maxHits);

			List<ResultData> results = new ArrayList<ResultData>();

			is.search(query, collector);
			ScoreDoc[] hits = collector.topDocs().scoreDocs;

			ResultData rd;
			Document doc;
			Highlighter hl;
			SerbianAnalyzer sa = new SerbianAnalyzer();
			for (ScoreDoc sd : hits) {
				doc = is.doc(sd.doc);
				String[] allKeywords = doc.getValues("keyword");
				String keywords = "";
				for (String keyword : allKeywords) {
					keywords += keyword.trim() + " ";
				}
				keywords = keywords.trim();
				String title = doc.get("title");
				String location = "files/"+Paths.get(doc.get("filename")).getFileName().toString();
                File file = new File(location);
                if(!file.exists()){
                    continue;
                }
				String highlight = "";
				for (RequiredHighlight rh : requiredHighlights) {
					hl = new Highlighter(new QueryScorer(query, reader, rh.getFieldName()));
					try{
						highlight += hl.getBestFragment(sa, rh.getFieldName(),"" + getDocumentText(location));
					}catch (InvalidTokenOffsetsException e) {
						//throw new IllegalArgumentException("Unable to make highlight");
					}
				}
				rd = new ResultData(title, keywords, location,highlight);
				try{
                    rd.setCategory(Long.parseLong(doc.get("category")));
                }catch (Exception e){
                    rd.setCategory(0);
                }
				results.add(rd);
			}
			reader.close();
			return results;

		} catch (IOException e) {
			throw new IllegalArgumentException(
					"U prosledjenom direktorijumu ne postoje indeksi ili je direktorijum zakljucan");
		}
	}

	private static String getDocumentText(String location){
		File file = new File(location);
		DocumentHandler handler = getHandler(location);
		return handler.getText(file);
	}
	
	protected static DocumentHandler getHandler(String fileName){
		if(fileName.endsWith(".txt")){
			return new TextDocHandler();
		}else if(fileName.endsWith(".pdf")){
			return new PDFHandler();
		}else if(fileName.endsWith(".doc")){
			return new WordHandler();
		}else if(fileName.endsWith(".docx")){
			return new Word2007Handler();
		}else{
			return null;
		}
	}
}
