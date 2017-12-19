package org.sf57.ebook.service.impl;

import org.sf57.ebook.entity.Language;
import org.sf57.ebook.repo.LangRepository;
import org.sf57.ebook.service.LangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class LangServiceImpl implements LangService{

    @Autowired
    private LangRepository langRepository;

    @Override
    public Language findOne(long id) {
        return langRepository.findOne(id);
    }

    @Override
    public List<Language> findAll() {
        return langRepository.findAll();
    }

    @Override
    public Language save(Language lang) {
        return langRepository.save(lang);
    }

    @Override
    public void delete(long id) {
        langRepository.delete(id);
    }
}
