package org.sf57.ebook;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.sf57.ebook.lucene.indexing.Indexer;
import org.sf57.ebook.storage.StorageProperties;
import org.sf57.ebook.storage.StorageService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.io.File;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class EbookApplication {

    @Value("${dataDir}")
    private String DATA_DIR_PATH;

    @Value("${index}")
    private String index;

    @PostConstruct
    public void init() {
        Indexer.getInstance().index(new File(DATA_DIR_PATH));
    }
    @PreDestroy
    public void destroy() throws Exception {
        FileUtils.cleanDirectory(new File(index));
    }

	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {
			storageService.loadAll();
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(EbookApplication.class, args);
	}
}
