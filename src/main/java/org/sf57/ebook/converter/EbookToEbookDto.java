package org.sf57.ebook.converter;

import org.sf57.ebook.dto.EbookDto;
import org.sf57.ebook.entity.Ebook;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class EbookToEbookDto implements Converter<Ebook,EbookDto>{
    @Override
    public EbookDto convert(Ebook ebook) {
        return new EbookDto()
                .setId(ebook.getId())
                .setTitle(ebook.getTitle())
                .setAuthor(ebook.getAuthor())
                .setKeywords(ebook.getKeywords())
                .setPublicationYear(ebook.getPublicationYear())
                .setFilename(ebook.getFilename())
                .setMIME(ebook.getMIME())
                .setCategory(ebook.getCategory().getId())
                .setLanguage(ebook.getLanguage().getId())
                .setUser(ebook.getUser().getUsername());
    }

    public List<EbookDto> convert(List<Ebook> ebooks){
        List<EbookDto> ebookDtos = new ArrayList<>();
        for (Ebook e:ebooks) {
            ebookDtos.add(convert(e));
        }
        return ebookDtos;
    }
}
