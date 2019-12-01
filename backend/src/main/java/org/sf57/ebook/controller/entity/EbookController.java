package org.sf57.ebook.controller.entity;

import org.apache.lucene.document.Document;
import org.sf57.ebook.converter.EbookDtoToEbook;
import org.sf57.ebook.converter.EbookToEbookDto;
import org.sf57.ebook.converter.MultipartFileToFile;
import org.sf57.ebook.dto.EbookDto;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.lucene.indexing.Indexer;
import org.sf57.ebook.service.EbookService;
import org.sf57.ebook.service.IndexService;
import org.sf57.ebook.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.security.Principal;

@RestController
@RequestMapping("api/ebooks")
public class EbookController {

    @Autowired
    private EbookService ebookService;

    @Autowired
    private IndexService indexService;

    @Autowired
    private EbookDtoToEbook toEbook;

    @Autowired
    private EbookToEbookDto toDto;

    @Autowired
    private MultipartFileToFile toFile;

    private final StorageService storageService;

    @Autowired
    public EbookController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping
    public ResponseEntity getall(Principal principal){
        return ResponseEntity.ok(indexService.filterEbooks(toDto.convert(ebookService.findAll()),principal.getName()));
    }

//    @GetMapping("/{id}")
//    public ResponseEntity get(@PathVariable long id){
//        return ResponseEntity.ok(toDto.convert(ebookService.findOne(id)));
//    }
    @PostMapping(value = "upload")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity upload(@RequestParam("file") MultipartFile file) {
        File newFile = toFile.convert(file);
        if(newFile==null){
            return ResponseEntity.badRequest().body("");
        }
        Ebook ebook = indexService.index(newFile);
        newFile.delete();
        return ResponseEntity.ok(ebook);
    }

    @SuppressWarnings("unchecked")
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity uploadFile(@RequestParam("file") MultipartFile file,
                                     @Validated EbookDto dto, Errors errors, Principal principal) {
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().body(errors.getAllErrors());
        }
        dto.setMIME("application/pdf");
        String filename = file.getOriginalFilename();
        if(filename.toLowerCase().endsWith(".pdf")){
            String urlPhoto=filename.substring(0,filename.length()-4);
            String finalUrlPhoto = urlPhoto;

            if(storageService.loadAll().filter(s -> s.toString().startsWith(finalUrlPhoto)).count()!=0){
                urlPhoto+="-v"+storageService.loadAll().filter(s -> s.toString().startsWith(finalUrlPhoto)).count()+".pdf";
            }else{
                urlPhoto=filename;
            }
            dto.setFilename(urlPhoto);
            dto.setUser(principal.getName());
            dto.setFilename("files/"+urlPhoto);
            Ebook ebook = ebookService.save(toEbook.convert(dto));
            storageService.store(file,urlPhoto);

            File newfile = storageService.load(urlPhoto).toFile();
            Document doc = indexService.indexFile(newfile, ebook);

            Indexer.getInstance().add(doc);

            return new ResponseEntity(toDto.convert(ebook), HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.CONFLICT);
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity update(@PathVariable long id,@RequestBody EbookDto dto, Errors errors) {
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().body(errors.getAllErrors());
        }
        if(dto.getId()!=id && dto.getId()!=0){
            return ResponseEntity.badRequest().build();
        }
        Ebook ebook = ebookService.save(toEbook.convert(id,dto));
        if(ebook!=null){
            String filename = ebook.getFilename().substring(6); //without files/
            File newfile = storageService.load(filename).toFile();
            Document doc = indexService.indexFile(newfile, ebook);
            Indexer.getInstance().updateDocument(ebook,doc);
            return ResponseEntity.ok(toDto.convert(ebook));
        }
        return new ResponseEntity(HttpStatus.CONFLICT);

    }
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity delete(@PathVariable long id) {
        Ebook ebook = ebookService.findOne(id);
        if(ebook==null){
            return ResponseEntity.notFound().build();
        }
//      String filename = ebook.getFilename().substring(6); //without files/
        if(Indexer.getInstance().delete(ebook)){
            storageService.delete(ebook.getFilename());
        }
        ebookService.delete(id);
        return ResponseEntity.noContent().build();
    }


}
