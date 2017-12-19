package org.sf57.ebook.service.impl;

import org.sf57.ebook.entity.Category;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.entity.Language;
import org.sf57.ebook.repo.EbookRepository;
import org.sf57.ebook.service.EbookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EbookServiceImpl implements EbookService {

    @Autowired
    private EbookRepository ebookRepository;

    @Override
    public Ebook findOne(long id) {
        return ebookRepository.findOne(id);
    }

    @Override
    public List<Ebook> findEbooksByCategory(Category category) {
        return ebookRepository.findByCategory(category);
    }

    @Override
    public List<Ebook> findEbooksByLanguage(Language language) {
        return ebookRepository.findByLanguage(language);
    }

    @Override
    public Ebook findOneByFilename(String filename) {
        return ebookRepository.findByFilename(filename);
    }

    @Override
    public List<Ebook> findAll() {
        return ebookRepository.findAll();
    }

    @Override
    public Ebook save(Ebook ebook) {
        return ebookRepository.save(ebook);
    }

    @Override
    public void delete(long id) {
        ebookRepository.delete(id);
    }
}
