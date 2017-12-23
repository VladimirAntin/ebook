package org.sf57.ebook.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull
    @Size(max = 30)
    private String name;
    @JsonIgnore
    @OneToMany(mappedBy = "language", cascade = CascadeType.ALL)
    private Set<Ebook> ebooks = new HashSet<>();

    public Language() { }

    public long getId() {
        return id;
    }

    public Language setId(long id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Language setName(String name) {
        this.name = name;
        return this;
    }

    public Set<Ebook> getEbooks() {
        return ebooks;
    }

    public Language setEbooks(Set<Ebook> ebooks) {
        this.ebooks = ebooks;
        return this;
    }
}
