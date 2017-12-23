package org.sf57.ebook.service.impl;


import org.sf57.ebook.entity.Authority;
import org.sf57.ebook.entity.Category;
import org.sf57.ebook.entity.User;
import org.sf57.ebook.repo.AuthorityRepository;
import org.sf57.ebook.repo.UserRepository;
import org.sf57.ebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthorityRepository authorityRepository;

    @Override
    public User checkIfPosetilac(User user) {
        if(user!=null && user.getAuthorities().stream()
                .anyMatch(a->a.getAuthority().equalsIgnoreCase("role_posetilac"))){
            return null;
        }
        return user;
    }

    @Override
    public User findOne(long id) {
        return userRepository.findOne(id);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll().stream()
                .filter(u->!u.getAuthorities().contains(authorityRepository.findOne((long)3))).collect(Collectors.toList());
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User saveAdmin(User user) {
        Set<Authority> authorities = new HashSet<>();
        authorities.add(authorityRepository.findOne((long) 1));
        user.setAuthorities(authorities); //admin
        return userRepository.save(user);
    }

    @Override
    public User savePretplatilac(User user) {
        Set<Authority> authorities = new HashSet<>();
        authorities.add(authorityRepository.findOne((long)2));
        user.setAuthorities(authorities); //pretplatilac
        return userRepository.save(user);
    }

    @Override
    public User changePassword(long id, String password) {
        User user = userRepository.findOne(id);
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        return save(user);
    }

    @Override
    public void delete(long id) {
        userRepository.delete(id);
    }

    @Override
    public List<User> findByCategories(Category category) {
        return userRepository.findByCategories(new ArrayList(Arrays.asList(category)));
    }
}
