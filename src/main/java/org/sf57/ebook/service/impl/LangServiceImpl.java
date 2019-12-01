package org.sf57.ebook.service.impl;

import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.entity.Language;
import org.sf57.ebook.lucene.indexing.Indexer;
import org.sf57.ebook.repo.EbookRepository;
import org.sf57.ebook.repo.LangRepository;
import org.sf57.ebook.service.LangService;
import org.sf57.ebook.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LangServiceImpl implements LangService{

    @Autowired
    private LangRepository langRepository;

    @Autowired
    private EbookRepository ebookRepository;

    private final StorageService storageService;

    public LangServiceImpl(StorageService storageService) {
        this.storageService = storageService;
    }

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
        List<Ebook> ebooks = ebookRepository.findByLanguage(langRepository.findOne(id));
        for (Ebook e:ebooks) {
            Indexer.getInstance().delete(e);
            storageService.delete(e.getFilename().substring(6)); // files/
        }
        langRepository.delete(id);
    }
}
