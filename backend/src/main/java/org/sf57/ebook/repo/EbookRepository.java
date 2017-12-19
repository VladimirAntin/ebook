package org.sf57.ebook.repo;

import org.sf57.ebook.entity.Category;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.entity.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EbookRepository extends JpaRepository<Ebook,Long>{
    Ebook findByFilename(String filename);

    List<Ebook> findByCategory(Category category);

    List<Ebook> findByLanguage(Language language);
}
