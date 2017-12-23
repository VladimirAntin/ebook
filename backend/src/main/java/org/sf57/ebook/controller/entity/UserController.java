package org.sf57.ebook.controller.entity;

import org.sf57.ebook.converter.UserDtoToUser;
import org.sf57.ebook.converter.UserToUserDto;
import org.sf57.ebook.dto.UserDto;
import org.sf57.ebook.entity.User;
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
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserDtoToUser toUser;

    @Autowired
    private UserToUserDto toDto;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity all(){
        return ResponseEntity.ok(toDto.convert(userService.findAll()));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity get(@PathVariable long id){
        User user = userService.checkIfPosetilac(userService.findOne(id));
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toDto.convert(user));
    }

    @GetMapping(value = "/u={username}")
    public ResponseEntity get(@PathVariable String username){
        User user = userService.checkIfPosetilac(userService.findByUsername(username));
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toDto.convert(user));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity save(@RequestBody @Validated UserDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=0){
            return new ResponseEntity(HttpStatus.CONFLICT); //not send id
        }
        if(userService.findByUsername(dto.getUsername())!=null){
            return new ResponseEntity(HttpStatus.CONFLICT); //username exist
        }
        User user;
        if(dto.getAuthorities().stream().anyMatch(a->a.equals("admin"))){
            user = userService.saveAdmin(toUser.convert(dto));
        }else{
//            if(dto.getCategories()==null || dto.getCategories().isEmpty()){
//                return new ResponseEntity(HttpStatus.CONFLICT);
//            }
            user = userService.savePretplatilac(toUser.convert(dto));
        }
        return ResponseEntity.ok(toDto.convert(user));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','PRETPLATILAC')")
    public ResponseEntity put(@PathVariable long id, @RequestBody @Validated UserDto userDto, Errors errors, Principal principal){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(id!=userDto.getId()){
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        User loginUser = userService.findByUsername(principal.getName());
        User user=toUser.convert(id,userDto);
        if(user.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_POSETILAC"))){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        if(!loginUser.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_ADMIN"))
                && loginUser.getId()!=id){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }else if(loginUser.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_ADMIN")) &&
                !user.getAuthorities().stream().anyMatch(a->a.getAuthority().equals("ROLE_ADMIN"))){
            if(userDto.getAuthorities().stream().anyMatch(a->a.equals("admin"))){
                user = userService.saveAdmin(user);
            }else{
                user = userService.savePretplatilac(user);
            }
        }else{
            user = userService.save(user);
        }
        return ResponseEntity.ok(toDto.convert(user));
    }
    @PutMapping("/{id}/password")
    @PreAuthorize("hasAnyRole('ADMIN','PRETPLATILAC')")
    public ResponseEntity password(@PathVariable long id, @RequestBody UserDto dto, Principal principal){
        if(userService.findByUsername(principal.getName()).getId()!=id){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        User user = userService.changePassword(id,dto.getPassword());
        return ResponseEntity.ok(toDto.convert(user));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity delete(@PathVariable long id){
        User user = userService.findOne(id);
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
