package org.sf57.ebook;

import org.sf57.ebook.lucene.model.SearchType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Scanner;

public class createBCRYPTPass {

    // https://bcrypt-generator.com/
    public static void main(String[] args){
        System.out.println(SearchType.regular.ordinal());
        System.out.println(SearchType.fuzzy.ordinal());
        System.out.println(SearchType.phrase.ordinal());
        System.out.println(SearchType.range.ordinal());
        System.out.println(SearchType.prefix.ordinal());
        System.out.print("Unesi text za sifrovanje: ");
        Scanner in = new Scanner(System.in);
        String arg = in.nextLine();

        System.out.format("\n%s: '%-4s'",arg,passwordEncript(arg));
    }

    public static String passwordEncript(String enc){
        return new BCryptPasswordEncoder().encode(enc);

    }
}
