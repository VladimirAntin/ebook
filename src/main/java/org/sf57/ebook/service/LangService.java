package org.sf57.ebook.service;

import org.sf57.ebook.entity.Language;

import java.util.List;

public interface LangService {
    Language findOne(long id);

    List<Language> findAll();

    Language save(Language lang);

    void delete(long id);
}
