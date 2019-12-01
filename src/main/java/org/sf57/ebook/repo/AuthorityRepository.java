package org.sf57.ebook.repo;

import org.sf57.ebook.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority,Long> {
    Authority findByName(String name);
}
