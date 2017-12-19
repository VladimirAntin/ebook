package org.sf57.ebook.converter;

import org.sf57.ebook.dto.UserDto;
import org.sf57.ebook.entity.Category;
import org.sf57.ebook.entity.User;
import org.sf57.ebook.service.CategoryService;
import org.sf57.ebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserDtoToUser implements Converter<UserDto,User>{

    @Autowired
    private UserService userService;

    @Autowired
    private CategoryService categoryService;

    @Override
    public User convert(UserDto dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setUsername(dto.getUsername());
        if(dto.getPassword()!=null){
            user.setPassword(new BCryptPasswordEncoder().encode(dto.getPassword()));
        }
        if(dto.getCategories()!=null && !dto.getCategories().isEmpty()){
            for (Category c:dto.getCategories()) {
                user.getCategories().add(categoryService.findOne(c.getId()));
            }
        }
        return user;
    }
    public User convert(long id,UserDto dto) {
        User user = userService.findOne(id);
        if(dto.getFirstName()!=null){
            user.setFirstName(dto.getFirstName());
        }
        if(dto.getLastName()!=null){
            user.setLastName(dto.getLastName());
        }
        if(dto.getLastName()!=null){
            user.setLastName(dto.getLastName());
        }
        if(dto.getUsername()!=null){
            user.setUsername(dto.getUsername());
        }
        if(dto.getPassword()!=null){
            user.setPassword(new BCryptPasswordEncoder().encode(dto.getPassword()));
        }
        return user;
    }


}
