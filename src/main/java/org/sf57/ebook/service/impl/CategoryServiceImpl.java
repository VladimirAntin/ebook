package org.sf57.ebook.service.impl;

import org.sf57.ebook.entity.Category;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.lucene.indexing.Indexer;
import org.sf57.ebook.repo.CategoryRepository;
import org.sf57.ebook.repo.EbookRepository;
import org.sf57.ebook.service.CategoryService;
import org.sf57.ebook.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private EbookRepository ebookRepository;

    private final StorageService storageService;

    public CategoryServiceImpl(StorageService storageService) {
        this.storageService = storageService;
    }

    @Override
    public Category findOne(long id) {
        return categoryRepository.findOne(id);
    }

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public void delete(long id) {
        List<Ebook> ebooks = ebookRepository.findByCategory(categoryRepository.findOne(id));
        for (Ebook e:ebooks) {
            Indexer.getInstance().delete(e);
            storageService.delete(e.getFilename().substring(6)); // files/
        }
        categoryRepository.delete(id);
    }
}
