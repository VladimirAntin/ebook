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
        EbookDto dto = new EbookDto();
        dto.setId(ebook.getId());
        dto.setTitle(ebook.getTitle());
        dto.setAuthor(ebook.getAuthor());
        dto.setKeywords(ebook.getKeywords());
        dto.setPublicationYear(ebook.getPublicationYear());
        dto.setFilename(ebook.getFilename());
        dto.setMIME(ebook.getMIME());
        dto.setCategory(ebook.getCategory().getId());
        dto.setLanguage(ebook.getLanguage().getId());
        dto.setUser(ebook.getUser().getUsername());
        return dto;
    }

    public List<EbookDto> convert(List<Ebook> ebooks){
        List<EbookDto> ebookDtos = new ArrayList<>();
        for (Ebook e:ebooks) {
            ebookDtos.add(convert(e));
        }
        return ebookDtos;
    }
}
