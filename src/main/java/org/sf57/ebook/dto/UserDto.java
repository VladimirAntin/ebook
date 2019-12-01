package org.sf57.ebook.dto;

import org.sf57.ebook.entity.Category;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

public class UserDto {
    @NotNull
    private long id;
    @NotNull
    @Size(min = 1, max = 30)
    private String firstName;
    @NotNull
    @Size(min = 1, max = 30)
    private String lastName;
    @Column(unique = true)
    @NotNull
    @Size(min = 1, max = 30)
    private String username;
    @Size(max = 256)
    private String password;
    private Set<String> authorities = new HashSet<>();
    private Set<Category> categories = new HashSet<>();

    public UserDto() { }

    public long getId() {
        return id;
    }

    public UserDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getFirstName() {
        return firstName;
    }

    public UserDto setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public UserDto setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public UserDto setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public UserDto setPassword(String password) {
        this.password = password;
        return this;
    }

    public Set<String> getAuthorities() {
        return authorities;
    }

    public UserDto setAuthorities(Set<String> authorities) {
        this.authorities = authorities;
        return this;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public UserDto setCategories(Set<Category> categories) {
        this.categories = categories;
        return this;
    }
}
