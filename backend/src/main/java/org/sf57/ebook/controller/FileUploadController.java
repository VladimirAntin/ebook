package org.sf57.ebook.controller;

import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.entity.User;
import org.sf57.ebook.service.EbookService;
import org.sf57.ebook.service.UserService;
import org.sf57.ebook.storage.StorageFileNotFoundException;
import org.sf57.ebook.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
public class FileUploadController {

    @Autowired
    private UserService userService;

    @Autowired
    private EbookService ebookService;

    private final StorageService storageService;

    @Autowired
    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping("/files/{filename:.+}")
    @PreAuthorize("hasAnyRole('ADMIN','PRETPLATILAC')")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename, Principal principal) {
        User loginUser = userService.findByUsername(principal.getName());
        if(loginUser.getAuthorities().size()==1 &&
                loginUser.getAuthorities().stream().anyMatch(a ->a.getAuthority().equals("ROLE_PRETPLATILAC"))){
            Ebook ebook = ebookService.findOneByFilename("files/"+filename);
            if(ebook==null){
                return new ResponseEntity(HttpStatus.NOT_FOUND);
            }
            if(!loginUser.getCategories().stream().anyMatch(c -> c.getName().equals(ebook.getCategory().getName()))){
                return new ResponseEntity(HttpStatus.FORBIDDEN);
            }
        }
        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+file.getFilename()+"\"")
                .body(file);
    }

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }
}
