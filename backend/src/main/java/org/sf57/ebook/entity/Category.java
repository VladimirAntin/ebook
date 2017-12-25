package org.sf57.ebook.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull
    @Size(min = 1, max = 30)
    private String name;
    @JsonIgnore
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private Set<Ebook> ebooks = new HashSet<>();
    @JsonIgnore
    @ManyToMany(mappedBy = "categories", cascade = CascadeType.ALL)
    private Set<User> users = new HashSet<>();

    public Category() { }

    public long getId() {
        return id;
    }

    public Category setId(long id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Category setName(String name) {
        this.name = name;
        return this;
    }

    public Set<Ebook> getEbooks() {
        return ebooks;
    }

    public Category setEbooks(Set<Ebook> ebooks) {
        this.ebooks = ebooks;
        return this;
    }

    public Set<User> getUsers() {
        return users;
    }

    public Category setUsers(Set<User> users) {
        this.users = users;
        return this;
    }
}
