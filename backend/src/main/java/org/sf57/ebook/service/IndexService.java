package org.sf57.ebook.service;


import org.apache.lucene.document.Document;
import org.sf57.ebook.dto.EbookDto;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.lucene.model.ResultData;

import java.io.File;
import java.util.List;

public interface IndexService {

    Document indexFile(File f, Ebook ebook);

    Ebook index(File f);

    List<ResultData> filter(List<ResultData> resultData, String username);

    List<EbookDto> filterEbooks(List<EbookDto> ebooks,String username);
}
