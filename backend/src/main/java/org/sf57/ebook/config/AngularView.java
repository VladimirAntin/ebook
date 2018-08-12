package org.sf57.ebook.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 12.8.18.
  Time: 13.37
*/
// https://stackoverflow.com/questions/39331929/spring-catch-all-route-for-index-html/39352299
@Configuration
public class AngularView extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/{spring:\\w+}")
                .setViewName("forward:/");
        registry.addViewController("/**/{spring:\\w+}")
                .setViewName("forward:/");
        registry.addViewController("/{spring:\\w+}/public/**{spring:?!(\\.js|\\.css)$}")
                .setViewName("forward:/");
    }
}