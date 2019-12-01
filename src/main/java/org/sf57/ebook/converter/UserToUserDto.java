package org.sf57.ebook.converter;

import org.sf57.ebook.dto.UserDto;
import org.sf57.ebook.entity.Authority;
import org.sf57.ebook.entity.User;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class UserToUserDto implements Converter<User,UserDto>{
    @Override
    public UserDto convert(User user) {
        UserDto dto = new UserDto()
                .setId(user.getId())
                .setFirstName(user.getFirstName())
                .setLastName(user.getLastName())
                .setUsername(user.getUsername())
                .setCategories(user.getCategories());
        Set<String> authorities = new HashSet<>();
        for (Authority a: (Set<Authority>)user.getAuthorities()) {
            authorities.add(a.getName().substring(5).toLowerCase());
        }
        dto.setAuthorities(authorities);
        return dto;
    }

    public List<UserDto> convert(List<User> users){
        List<UserDto> userDtos = new ArrayList<>();
        for (User u:users) {
            userDtos.add(convert(u));
        }
        return userDtos;
    }

}
