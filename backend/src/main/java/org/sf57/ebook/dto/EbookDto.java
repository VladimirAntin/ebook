package org.sf57.ebook.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
public class EbookDto {
    @NotNull
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
    @Size(max = 200)
    private String filename;
    @Size(max = 100)
    private String MIME;
    @NotNull
    private long category;
    @NotNull
    private long language;
    private String user;

}
