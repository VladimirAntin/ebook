package org.sf57.ebook.controller.entity;

import org.sf57.ebook.converter.EbookToEbookDto;
import org.sf57.ebook.entity.Language;
import org.sf57.ebook.service.EbookService;
import org.sf57.ebook.service.IndexService;
import org.sf57.ebook.service.LangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("api/languages")
public class LanguageController {
    @Autowired
    private LangService languageService;

    @Autowired
    private IndexService indexService;

    @Autowired
    private EbookService ebookService;

    @Autowired
    private EbookToEbookDto toDto;

    @GetMapping
    public ResponseEntity all(){
        return ResponseEntity.ok(languageService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity one(@PathVariable long id){
        return ResponseEntity.ok(languageService.findOne(id));
    }
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity save(@RequestBody @Validated Language language, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(language.getId()!=0){
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        return ResponseEntity.ok(languageService.save(language));
    }
    @GetMapping("/{id}/ebooks")
    public ResponseEntity ebooks(@PathVariable long id, Principal principal){
        return ResponseEntity.ok(indexService.filterEbooks(
                toDto.convert(ebookService.findEbooksByLanguage(languageService.findOne(id))),principal.getName()));
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity put(@PathVariable long id, @RequestBody @Validated Language language, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(language.getId()!=id && language.getId()!=0){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(languageService.save(language));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity delete(@PathVariable long id){
        if(languageService.findOne(id)==null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        languageService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
