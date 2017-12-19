package org.sf57.ebook.converter;

import org.sf57.ebook.dto.EbookDto;
import org.sf57.ebook.entity.Category;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.entity.Language;
import org.sf57.ebook.entity.User;
import org.sf57.ebook.service.CategoryService;
import org.sf57.ebook.service.EbookService;
import org.sf57.ebook.service.LangService;
import org.sf57.ebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class EbookDtoToEbook implements Converter<EbookDto,Ebook>{

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private LangService langService;

    @Autowired
    private UserService userService;

    @Autowired
    private EbookService ebookService;

    @Override
    public Ebook convert(EbookDto ebookDto) {
        Ebook ebook = new Ebook();
        ebook.setId(ebookDto.getId());
        ebook.setTitle(ebookDto.getTitle());
        ebook.setAuthor(ebookDto.getAuthor());
        ebook.setKeywords(ebookDto.getKeywords());
        ebook.setPublicationYear(ebookDto.getPublicationYear());
        ebook.setFilename(ebookDto.getFilename());
        ebook.setMIME(ebookDto.getMIME());
        User user = userService.findByUsername(ebookDto.getUser());
        if(user!=null){
            ebook.setUser(user);
        }
        Language lang = langService.findOne(ebookDto.getLanguage());
        if(lang!=null){
            ebook.setLanguage(lang);
        }
        Category category = categoryService.findOne(ebookDto.getCategory());
        if(category!=null){
            ebook.setCategory(category);
        }
        return ebook;
    }
    public Ebook convert(long id,EbookDto ebookDto) {
        Ebook ebook = ebookService.findOne(id);
        if(ebookDto.getTitle()!=null){
            ebook.setTitle(ebookDto.getTitle());
        }
        if(ebookDto.getAuthor()!=null){
            ebook.setAuthor(ebookDto.getAuthor());
        }
        if(ebookDto.getKeywords()!=null){
            ebook.setKeywords(ebookDto.getKeywords());
        }
        if(ebookDto.getPublicationYear()!=0){
            ebook.setPublicationYear(ebookDto.getPublicationYear());
        }
        User user = userService.findByUsername(ebookDto.getUser());
        if(user!=null){
            ebook.setUser(user);
        }
        Language lang = langService.findOne(ebookDto.getLanguage());
        if(lang!=null){
            ebook.setLanguage(lang);
        }
        Category category = categoryService.findOne(ebookDto.getCategory());
        if(category!=null){
            ebook.setCategory(category);
        }
        return ebook;
    }

}
