package org.sf57.ebook.entity;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Ebook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull
    @Size(max = 80)
    private String title;
    @NotNull
    @Size(max = 120)
    private String author;
    @NotNull
    @Size(max = 120)
    private String keywords;
    @Max(3000)
    @Min(1990)
    private int publicationYear;
    @NotNull
    @Size(max = 200)
    @Column(unique = true)
    private String filename;
    @NotNull
    @Size(max = 100)
    private String MIME;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "language_id", referencedColumnName = "id")
    private Language language;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    public Ebook() { }

    public long getId() {
        return id;
    }

    public Ebook setId(long id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public Ebook setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getAuthor() {
        return author;
    }

    public Ebook setAuthor(String author) {
        this.author = author;
        return this;
    }

    public String getKeywords() {
        return keywords;
    }

    public Ebook setKeywords(String keywords) {
        this.keywords = keywords;
        return this;
    }

    public int getPublicationYear() {
        return publicationYear;
    }

    public Ebook setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
        return this;
    }

    public String getFilename() {
        return filename;
    }

    public Ebook setFilename(String filename) {
        this.filename = filename;
        return this;
    }

    public String getMIME() {
        return MIME;
    }

    public Ebook setMIME(String MIME) {
        this.MIME = MIME;
        return this;
    }

    public Category getCategory() {
        return category;
    }

    public Ebook setCategory(Category category) {
        this.category = category;
        return this;
    }

    public Language getLanguage() {
        return language;
    }

    public Ebook setLanguage(Language language) {
        this.language = language;
        return this;
    }

    public User getUser() {
        return user;
    }

    public Ebook setUser(User user) {
        this.user = user;
        return this;
    }
}
