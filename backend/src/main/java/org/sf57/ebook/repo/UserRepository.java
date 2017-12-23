package org.sf57.ebook.repo;

import org.sf57.ebook.entity.Category;
import org.sf57.ebook.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String username);
    List<User> findByCategories(List<Category> categories);
}
