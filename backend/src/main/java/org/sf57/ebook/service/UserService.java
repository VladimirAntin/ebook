package org.sf57.ebook.service;

import org.sf57.ebook.entity.Category;
import org.sf57.ebook.entity.User;

import java.util.List;

public interface UserService {
    User findOne(long id);

    User findByUsername(String username);

    List<User> findByCategories(Category category);

    List<User> findAll();

    User save(User user);

    User saveAdmin(User user);

    User savePretplatilac(User user);

    User changePassword(long id,String password);

    void delete(long id);

    User checkIfPosetilac(User user);
}
