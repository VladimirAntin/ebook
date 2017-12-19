package org.sf57.ebook.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
@NoArgsConstructor
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
    @JoinColumn(name = "category_id")
    private Category category;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "language_id")
    private Language language;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
