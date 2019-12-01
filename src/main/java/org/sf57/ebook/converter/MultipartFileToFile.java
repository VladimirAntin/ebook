package org.sf57.ebook.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Component
public class MultipartFileToFile implements Converter<MultipartFile,File>{
    @Override
    public File convert(MultipartFile multipartFile) {
        File convFile = new File(multipartFile.getOriginalFilename());
        FileOutputStream fos = null;
        try {
            convFile.createNewFile();
            fos = new FileOutputStream(convFile);
            fos.write(multipartFile.getBytes());
        } catch (IOException e) {
            return null;
        }finally {
            try {
                fos.close();
            } catch (IOException e) {
                return null;
            }
        }
        return convFile;
    }
}
