package org.sf57.ebook.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.sf57.ebook.entity.Category;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
    @NotNull
    private long id;
    @NotNull
    @Size(max = 30)
    private String firstName;
    @NotNull
    @Size(max = 30)
    private String lastName;
    @Column(unique = true)
    @NotNull
    @Size(max = 30)
    private String username;
    @Size(max = 256)
    private String password;
    private Set<String> authorities = new HashSet<>();
    private Set<Category> categories = new HashSet<>();

}
