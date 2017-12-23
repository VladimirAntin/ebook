package org.sf57.ebook.controller.entity;

import org.sf57.ebook.converter.EbookToEbookDto;
import org.sf57.ebook.converter.UserToUserDto;
import org.sf57.ebook.entity.Category;
import org.sf57.ebook.service.CategoryService;
import org.sf57.ebook.service.EbookService;
import org.sf57.ebook.service.IndexService;
import org.sf57.ebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private UserService userService;

    @Autowired
    private EbookService ebookService;

    @Autowired
    private EbookToEbookDto toDto;

    @Autowired
    private UserToUserDto toUserDto;

    @Autowired
    private IndexService indexService;

    @GetMapping
    public ResponseEntity all(){
        return ResponseEntity.ok(categoryService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity one(@PathVariable long id){
        return ResponseEntity.ok(categoryService.findOne(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity save(@RequestBody @Validated Category category, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(category.getId()!=0){
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        return ResponseEntity.ok(categoryService.save(category));
    }

    @GetMapping("/{id}/ebooks")
    public ResponseEntity ebooks(@PathVariable long id, Principal principal){
        return ResponseEntity.ok(indexService.filterEbooks(
                toDto.convert(ebookService.findEbooksByCategory(categoryService.findOne(id))),principal.getName()));
    }
    @GetMapping("/{id}/users")
    public ResponseEntity users(@PathVariable long id){
        return ResponseEntity.ok(toUserDto.convert(userService.findByCategories(categoryService.findOne(id))));
    }


    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity put(@PathVariable long id, @RequestBody @Validated Category category, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(category.getId()!=id && category.getId()!=0){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(categoryService.save(category));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity delete(@PathVariable long id){
        if(categoryService.findOne(id)==null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        categoryService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
