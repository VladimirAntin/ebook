package org.sf57.ebook.lucene.indexing.handlers.xml;

import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field.Store;
import org.apache.lucene.document.StringField;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.SimpleFSDirectory;
import org.sf57.ebook.lucene.indexing.analysers.SerbianAnalyzer;
import org.springframework.beans.factory.annotation.Value;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.util.Date;

public class XMLIndexer {

	@Value("${index}")
	private static String indexRes;

	@Value("${dataDir}")
	private static String dataDirRes;
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Directory indexDir;
		File dataDir;

		try{
			if (args.length != 2) {
				indexDir=new SimpleFSDirectory(FileSystems.getDefault().getPath(indexRes));
				dataDir=new File(dataDirRes);
			}else{
				indexDir = new SimpleFSDirectory(FileSystems.getDefault().getPath(args[0]));
				dataDir = new File(args[1]);
			}
			long start = new Date().getTime();
			int numIndexed = index(indexDir, dataDir);
			long end = new Date().getTime();
			System.out.println("Indexing " + numIndexed + " files took "+ (end - start) + " milliseconds");
		}catch(IOException ioe){
			System.out.println("Problem u pristupu direktorijumima");
		}
	}
	
	// open an index and start file directory traversal
	
	public static int index(Directory indexDir, File dataDir) throws IOException {
		if (!dataDir.exists() || !dataDir.isDirectory()) {
			throw new IOException(dataDir + " does not exist or is not a directory");
		}
		IndexWriterConfig iwc = new IndexWriterConfig(new SerbianAnalyzer());
		iwc.setOpenMode(IndexWriterConfig.OpenMode.CREATE_OR_APPEND);
		IndexWriter writer = new IndexWriter(indexDir, iwc);
		indexDirectory(writer, dataDir);
		int numIndexed = writer.numDocs();
		writer.close();
		return numIndexed;
	}
	// recursive method that calls itself when it finds a directory
	private static void indexDirectory(IndexWriter writer, File dir) throws IOException {
		File[] files = dir.listFiles();
		for (int i = 0; i < files.length; i++) {
			File f = files[i];
			if (f.isDirectory()) {
				indexDirectory(writer, f);
			} else if (f.getName().endsWith(".xml")) {
				indexFile(writer, f);
			}
		}
	}
	
	private static void indexFile(IndexWriter writer, File f)throws IOException {
		if (f.isHidden() || !f.exists() || !f.canRead()) {
			return;
		}
		System.out.println("Indexing " + f.getCanonicalPath());
		SAXXMLHandler saxHandler=new SAXXMLHandler();
		Document doc = saxHandler.getDocument(new FileInputStream(f));
		doc.add(new StringField("filename",f.getCanonicalPath(),Store.YES));
		System.out.println(doc==null);
		writer.addDocument(doc);
	}

}
