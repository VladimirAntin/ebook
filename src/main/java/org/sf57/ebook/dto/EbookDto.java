package org.sf57.ebook.dto;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class EbookDto {
    @NotNull
    private long id;
    @NotNull
    @Size(min = 1,max = 80)
    private String title;
    @NotNull
    @Size(min = 1,max = 120)
    private String author;
    @NotNull
    @Size(min = 1,max = 120)
    private String keywords;
    @Max(3000)
    @Min(1990)
    private int publicationYear;
    @Size(min = 1,max = 200)
    private String filename;
    @Size(min = 1,max = 100)
    private String MIME;
    @NotNull
    private long category;
    @NotNull
    private long language;
    private String user;

    public EbookDto() { }

    public long getId() {
        return id;
    }

    public EbookDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public EbookDto setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getAuthor() {
        return author;
    }

    public EbookDto setAuthor(String author) {
        this.author = author;
        return this;
    }

    public String getKeywords() {
        return keywords;
    }

    public EbookDto setKeywords(String keywords) {
        this.keywords = keywords;
        return this;
    }

    public int getPublicationYear() {
        return publicationYear;
    }

    public EbookDto setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
        return this;
    }

    public String getFilename() {
        return filename;
    }

    public EbookDto setFilename(String filename) {
        this.filename = filename;
        return this;
    }

    public String getMIME() {
        return MIME;
    }

    public EbookDto setMIME(String MIME) {
        this.MIME = MIME;
        return this;
    }

    public long getCategory() {
        return category;
    }

    public EbookDto setCategory(long category) {
        this.category = category;
        return this;
    }

    public long getLanguage() {
        return language;
    }

    public EbookDto setLanguage(long language) {
        this.language = language;
        return this;
    }

    public String getUser() {
        return user;
    }

    public EbookDto setUser(String user) {
        this.user = user;
        return this;
    }
}
