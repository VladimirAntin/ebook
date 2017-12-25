package org.sf57.ebook.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 25.12.17.
  Time: 21.53
*/
// https://stackoverflow.com/questions/38516667/springboot-angular2-how-to-handle-html5-urls
@Controller
public class ViewController {

    @RequestMapping(
            { "/users", "/users/**", "/categories", "/categories/**",
                    "/languages", "/languages/**"

            }
    )
    public String index() {
        return "forward:/";
    }
}