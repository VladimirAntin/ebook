package org.sf57.ebook.controller;


import org.sf57.ebook.converter.UserToUserDto;
import org.sf57.ebook.entity.Ebook;
import org.sf57.ebook.entity.User;
import org.sf57.ebook.entity.UserTokenState;
import org.sf57.ebook.security.NavItem;
import org.sf57.ebook.security.TokenHelper;
import org.sf57.ebook.service.IndexService;
import org.sf57.ebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private TokenHelper th;

    @Autowired
    private UserService userService;

    @Autowired
    private UserToUserDto toDto;

    @Value("${jwt.expires_in}")
    private long EXPIRES_IN;

    @GetMapping("/get")
    public ResponseEntity getPosetilac(){
        UserTokenState state = new UserTokenState();
        state.setAccess_token(th.generateToken("person"));
        state.setExpires_in(EXPIRES_IN);
        return ResponseEntity.ok(state);
    }
    @GetMapping("/me")
    @PreAuthorize("hasAnyRole('ADMIN','PRETPLATILAC')")
    public ResponseEntity get(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        return ResponseEntity.ok(toDto.convert(user));
    }
    @GetMapping("/check")
    @PreAuthorize("hasAnyRole('ADMIN','PRETPLATILAC')")
    public ResponseEntity check() {
        return ResponseEntity.ok(true);
    }

    @GetMapping("nav_items")
    public ResponseEntity getNav(Principal principal){
        Collection<? extends GrantedAuthority> authorities = userService.findByUsername(principal.getName()).getAuthorities();
        List<NavItem>  navItems = new ArrayList<>();
        navItems.add(new NavItem("Home","/",null));
        if(authorities.stream().anyMatch(t -> t.getAuthority().equals("ROLE_ADMIN"))) {
            navItems.add(new NavItem("Users","/users",null));
            navItems.add(new NavItem("Categories","/categories",null));
        }else {
            navItems.add(new NavItem("Categories","/categories",null));
        }
        return ResponseEntity.ok(navItems);
    }
}
