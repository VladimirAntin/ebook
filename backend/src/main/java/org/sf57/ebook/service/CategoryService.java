package org.sf57.ebook.service;

import org.sf57.ebook.entity.Category;

import java.util.List;

public interface CategoryService {
    Category findOne(long id);

    List<Category> findAll();

    Category save(Category category);

    void delete(long id);
}
