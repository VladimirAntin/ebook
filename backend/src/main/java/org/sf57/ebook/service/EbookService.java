package org.sf57.ebook.service;


import org.sf57.ebook.entity.Category;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.entity.Language;

import java.util.List;

public interface EbookService {
    Ebook findOne(long id);

    List<Ebook> findAll();

    List<Ebook> findEbooksByCategory(Category category);

    List<Ebook> findEbooksByLanguage(Language language);

    Ebook save(Ebook ebook);

    Ebook findOneByFilename(String filename);

    void delete(long id);

}
