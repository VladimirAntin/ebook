package org.sf57.ebook.service.impl;

import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.TextField;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.sf57.ebook.dto.EbookDto;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.entity.User;
import org.sf57.ebook.lucene.model.ResultData;
import org.sf57.ebook.service.IndexService;
import org.sf57.ebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Calendar;
import java.util.List;

@Service
public class IndexServiceImpl implements IndexService{

    @Autowired
    private UserService userService;

    @Override
    public Document indexFile(File f, Ebook ebook)  {
        if (f.isHidden() || !f.exists() || !f.canRead()) {
            return null;
        }
        PDDocument pd = null;
        Document doc = new Document();
        try {
            pd = PDDocument.load(f);
            PDFTextStripper stripper = new PDFTextStripper();

            pd.getDocumentInformation().setTitle(ebook.getTitle());
            pd.getDocumentInformation().setAuthor(ebook.getAuthor());
            pd.getDocumentInformation().setKeywords(ebook.getKeywords());
            pd.setDocumentId(ebook.getId());

            doc.add(new TextField("title", ebook.getTitle(), Field.Store.YES));
            doc.add(new TextField("filename", ebook.getFilename(), Field.Store.YES));
            doc.add(new TextField("author", ebook.getAuthor(), Field.Store.YES));
            doc.add(new TextField("text", stripper.getText(pd), Field.Store.NO));
            doc.add(new TextField("publicationYear",String.valueOf(ebook.getPublicationYear()), Field.Store.NO));
            doc.add(new TextField("category",String.valueOf(ebook.getCategory().getId()), Field.Store.YES));
            doc.add(new TextField("keyword", ebook.getKeywords(), Field.Store.YES));
            doc.add(new TextField("language", ebook.getLanguage().getName(), Field.Store.YES));
            doc.add(new TextField("id", String.valueOf(ebook.getId()), Field.Store.YES));
        } catch (IOException e) {
        }finally {
            try {
                pd.close();
            } catch (IOException e) {
            }
        }
        return doc;
    }

    @Override
    public Ebook index(File f) {
        if (f.isHidden() || !f.exists() || !f.canRead()) {
            return null;
        }
        PDDocument pd = null;
        Ebook ebook = new Ebook();
        try {
            pd = PDDocument.load(f);
            ebook.setTitle(pd.getDocumentInformation().getTitle());
            ebook.setFilename(f.getName());
            ebook.setAuthor(pd.getDocumentInformation().getAuthor());
            ebook.setPublicationYear(pd.getDocumentInformation().getCreationDate().get(Calendar.YEAR));
            if(pd.getDocumentInformation().getKeywords()!=null){
                ebook.setKeywords(pd.getDocumentInformation().getKeywords());
            }
            ebook.setMIME("application/pdf");
        } catch (IOException e) {
        }finally {
            try {
                pd.close();
            } catch (IOException e) {
            }
        }
        return ebook;
    }

    @Override
    public List<ResultData> filter(List<ResultData> resultData, String username) {
        User loginUser = userService.findByUsername(username);
        if(loginUser.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_ADMIN"))){
            return resultData;
        }else if(loginUser.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_PRETPLATILAC"))){
            for (ResultData rs:resultData) {
                if(loginUser.getCategories().stream().allMatch(c->c.getId()!=rs.getCategory())){
                    rs.setLocation(null);
                }
            }
        }else{
            resultData.forEach(r->r.setLocation(null));
        }
        return resultData;
    }

    @Override
    public List<EbookDto> filterEbooks(List<EbookDto> ebooks, String username) {
        User loginUser = userService.findByUsername(username);
        if(loginUser.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_ADMIN"))){
            return ebooks;
        }else if(loginUser.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_PRETPLATILAC"))){
            for (EbookDto ebook:ebooks) {
                if(loginUser.getCategories().stream().allMatch(c->c.getId()!=ebook.getCategory())){
                    ebook.setFilename(null);
                }
            }
        }else{
            ebooks.forEach(r->r.setFilename(null));
        }
        return ebooks;
    }
}
