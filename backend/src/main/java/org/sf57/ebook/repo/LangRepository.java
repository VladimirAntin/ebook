package org.sf57.ebook.repo;

import org.sf57.ebook.entity.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LangRepository extends JpaRepository<Language,Long>{
}
