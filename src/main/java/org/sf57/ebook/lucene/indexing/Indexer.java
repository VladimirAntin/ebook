package org.sf57.ebook.lucene.indexing;

import org.apache.lucene.document.Document;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.index.IndexWriterConfig.OpenMode;
import org.apache.lucene.index.Term;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.SimpleFSDirectory;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.lucene.indexing.analysers.SerbianAnalyzer;
import org.sf57.ebook.lucene.indexing.handlers.DocumentHandler;
import org.sf57.ebook.lucene.indexing.handlers.PDFHandler;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.util.ResourceBundle;

public class Indexer {
	
	private IndexWriter indexWriter;
	private Directory indexDir;
	private String indexPath;


	private static Indexer indexer = new Indexer();
	
	public static Indexer getInstance(){
		return indexer;
	}
	
	private Indexer() {
        indexPath = ResourceBundle.getBundle("application").getString("index");
		IndexWriterConfig iwc = new IndexWriterConfig(new SerbianAnalyzer());
        iwc.setOpenMode(OpenMode.CREATE);

		try{
			this.indexDir = new SimpleFSDirectory(FileSystems.getDefault().getPath(indexPath));
			this.indexWriter = new IndexWriter(this.indexDir, iwc);
		}catch(IOException ioe){
			throw new IllegalArgumentException("Path not correct");
		}
	}
	
	public IndexWriter getIndexWriter(){
		return this.indexWriter;
	}

	public boolean delete(Ebook ebook){
        try {
            synchronized (this){
                this.indexWriter.deleteDocuments(new Term("id", String.valueOf(ebook.getId())));
                this.indexWriter.commit();
            }
            return true;
        } catch (IOException e) {
        }
        return false;
	}
	
	public boolean add(Document doc){
		try {
			synchronized (this) {
				this.indexWriter.addDocument(doc);
				this.indexWriter.commit();
			}
			return true;
		} catch (IOException e) {
			return false;
		}
	}
	public boolean updateDocument(Ebook ebook,Document doc){
        try {
            synchronized (this){
                this.indexWriter.updateDocument(new Term("id", String.valueOf(ebook.getId())), doc);
                this.indexWriter.commit();
            }
            return true;
        } catch (IOException e) {
            return false;
        }
	}

	public int index(File file){
		DocumentHandler handler = null;
		String fileName = null;
		try {
			File[] files;
			if(file.isDirectory()){
				files = file.listFiles();
			}else{
				files = new File[1];
				files[0] = file;
			}
			for(File newFile : files){
				if(newFile.isFile()){
					fileName = newFile.getName();
					handler = getHandler(fileName);
					if(handler == null){
						System.out.println("Nije moguce indeksirati dokument sa nazivom: " + fileName);
						continue;
					}
					this.indexWriter.addDocument(handler.getIndexUnit(newFile).getLuceneDocument());
				} else if (newFile.isDirectory()){
					index(newFile);
				}
			}
			this.indexWriter.commit();
			System.out.println("indexing done");
		} catch (IOException e) {
			System.out.println("indexing NOT done");
		}
		return this.indexWriter.numDocs();
	}

	protected void finalize() throws Throwable {
		this.indexWriter.close();
	}
	
	public DocumentHandler getHandler(String fileName){
		if(fileName.toLowerCase().endsWith(".pdf")){
			return new PDFHandler();
		}else{
			return null;
		}
	}

}
