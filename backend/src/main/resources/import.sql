INSERT INTO authority(name) VALUES ('ROLE_ADMIN');
INSERT INTO authority(name) VALUES ('ROLE_PRETPLATILAC');
INSERT INTO authority(name) VALUES ('ROLE_POSETILAC');

INSERT INTO user(first_name,last_name,username,password) VALUES ('admin','admin','admin','$2a$10$0korw4Ck4GpdLbMVhd8rSO540T5jPCWH5jEFbLJpRWgYpMhgZXt1C'); -- admin
INSERT INTO user(first_name,last_name,username,password) VALUES ('pretplatilac','pretplatilac','pretplatilac','$2a$10$.pADq9/VkoBCFAQr9RmWFOUtNGyQyYoXU/tMTkhQIF7QTrr/8QJQK'); -- pretplatilac
INSERT INTO user(first_name,last_name,username,password) VALUES ('person','person','person','$2a$10$sRJVUyxwg3MxhWQi3EbLaew9YziFIY2htww6CwUUZKJ8VnSrG087q');

INSERT INTO user_authority(user_id,authority_id) VALUES (1,1);
-- INSERT INTO user_authority(user_id,authority_id) VALUES (1,2);
INSERT INTO user_authority(user_id,authority_id) VALUES (2,2);
INSERT INTO user_authority(user_id,authority_id) VALUES (3,3);


INSERT INTO category(name) VALUES ('medicina');
INSERT INTO category(name) VALUES ('koridor');
INSERT INTO category(name) VALUES ('vezbe');

INSERT INTO user_category(user_id,category_id) VALUES (2,3);

-- Languages --
INSERT INTO language(name) VALUES('English');
INSERT INTO language(name) VALUES('Serbian');
INSERT INTO language(name) VALUES('Afar');
INSERT INTO language(name) VALUES('Abkhazian');
INSERT INTO language(name) VALUES('Afrikaans');
INSERT INTO language(name) VALUES('Amharic');
INSERT INTO language(name) VALUES('Arabic');
INSERT INTO language(name) VALUES('Assamese');
INSERT INTO language(name) VALUES('Aymara');
INSERT INTO language(name) VALUES('Azerbaijani');
INSERT INTO language(name) VALUES('Bashkir');
INSERT INTO language(name) VALUES('Belarusian');
INSERT INTO language(name) VALUES('Bulgarian');
INSERT INTO language(name) VALUES('Bihari');
INSERT INTO language(name) VALUES('Bislama');
INSERT INTO language(name) VALUES('Tibetan');
INSERT INTO language(name) VALUES('Breton');
INSERT INTO language(name) VALUES('Catalan');
INSERT INTO language(name) VALUES('Corsican');
INSERT INTO language(name) VALUES('Czech');
INSERT INTO language(name) VALUES('Welsh');
INSERT INTO language(name) VALUES('Danish');
INSERT INTO language(name) VALUES('German');
INSERT INTO language(name) VALUES('Bhutani');
INSERT INTO language(name) VALUES('Greek');
INSERT INTO language(name) VALUES('Esperanto');
INSERT INTO language(name) VALUES('Spanish');
INSERT INTO language(name) VALUES('Estonian');
INSERT INTO language(name) VALUES('Basque');
INSERT INTO language(name) VALUES('Persian');
INSERT INTO language(name) VALUES('Finnish');
INSERT INTO language(name) VALUES('Fiji');
INSERT INTO language(name) VALUES('Faeroese');
INSERT INTO language(name) VALUES('French');
INSERT INTO language(name) VALUES('Frisian');
INSERT INTO language(name) VALUES('Irish');
INSERT INTO language(name) VALUES('Galician');
INSERT INTO language(name) VALUES('Guarani');
INSERT INTO language(name) VALUES('Gujarati');
INSERT INTO language(name) VALUES('Hausa');
INSERT INTO language(name) VALUES('Hindi');
INSERT INTO language(name) VALUES('Croatian');
INSERT INTO language(name) VALUES('Hungarian');
INSERT INTO language(name) VALUES('Armenian');
INSERT INTO language(name) VALUES('Interlingua');
INSERT INTO language(name) VALUES('Interlingue');
INSERT INTO language(name) VALUES('Inupiak');
INSERT INTO language(name) VALUES('Indonesian');
INSERT INTO language(name) VALUES('Icelandic');
INSERT INTO language(name) VALUES('Italian');
INSERT INTO language(name) VALUES('Hebrew');
INSERT INTO language(name) VALUES('Japanese');
INSERT INTO language(name) VALUES('Yiddish');
INSERT INTO language(name) VALUES('Javanese');
INSERT INTO language(name) VALUES('Georgian');
INSERT INTO language(name) VALUES('Kazakh');
INSERT INTO language(name) VALUES('Greenlandic');
INSERT INTO language(name) VALUES('Cambodian');
INSERT INTO language(name) VALUES('Kannada');
INSERT INTO language(name) VALUES('Korean');
INSERT INTO language(name) VALUES('Kashmiri');
INSERT INTO language(name) VALUES('Kurdish');
INSERT INTO language(name) VALUES('Kirghiz');
INSERT INTO language(name) VALUES('Latin');
INSERT INTO language(name) VALUES('Lingala');
INSERT INTO language(name) VALUES('Laothian');
INSERT INTO language(name) VALUES('Lithuanian');
INSERT INTO language(name) VALUES('Latvian');
INSERT INTO language(name) VALUES('Malagasy');
INSERT INTO language(name) VALUES('Maori');
INSERT INTO language(name) VALUES('Macedonian');
INSERT INTO language(name) VALUES('Malayalam');
INSERT INTO language(name) VALUES('Mongolian');
INSERT INTO language(name) VALUES('Moldavian');
INSERT INTO language(name) VALUES('Marathi');
INSERT INTO language(name) VALUES('Malay');
INSERT INTO language(name) VALUES('Maltese');
INSERT INTO language(name) VALUES('Burmese');
INSERT INTO language(name) VALUES('Nauru');
INSERT INTO language(name) VALUES('Nepali');
INSERT INTO language(name) VALUES('Dutch');
INSERT INTO language(name) VALUES('Norwegian');
INSERT INTO language(name) VALUES('Occitan');
INSERT INTO language(name) VALUES('Punjabi');
INSERT INTO language(name) VALUES('Polish');
INSERT INTO language(name) VALUES('Portuguese');
INSERT INTO language(name) VALUES('Quechua');
INSERT INTO language(name) VALUES('Kirundi');
INSERT INTO language(name) VALUES('Romanian');
INSERT INTO language(name) VALUES('Russian');
INSERT INTO language(name) VALUES('Kinyarwanda');
INSERT INTO language(name) VALUES('Sanskrit');
INSERT INTO language(name) VALUES('Sindhi');
INSERT INTO language(name) VALUES('Sangro');
INSERT INTO language(name) VALUES('Singhalese');
INSERT INTO language(name) VALUES('Slovak');
INSERT INTO language(name) VALUES('Slovenian');
INSERT INTO language(name) VALUES('Samoan');
INSERT INTO language(name) VALUES('Shona');
INSERT INTO language(name) VALUES('Somali');
INSERT INTO language(name) VALUES('Albanian');
INSERT INTO language(name) VALUES('Serbian');
INSERT INTO language(name) VALUES('Siswati');
INSERT INTO language(name) VALUES('Sesotho');
INSERT INTO language(name) VALUES('Sundanese');
INSERT INTO language(name) VALUES('Swedish');
INSERT INTO language(name) VALUES('Swahili');
INSERT INTO language(name) VALUES('Tamil');
INSERT INTO language(name) VALUES('Telugu');
INSERT INTO language(name) VALUES('Tajik');
INSERT INTO language(name) VALUES('Thai');
INSERT INTO language(name) VALUES('Tigrinya');
INSERT INTO language(name) VALUES('Turkmen');
INSERT INTO language(name) VALUES('Tagalog');
INSERT INTO language(name) VALUES('Setswana');
INSERT INTO language(name) VALUES('Tonga');
INSERT INTO language(name) VALUES('Turkish');
INSERT INTO language(name) VALUES('Tsonga');
INSERT INTO language(name) VALUES('Tatar');
INSERT INTO language(name) VALUES('Twi');
INSERT INTO language(name) VALUES('Ukrainian');
INSERT INTO language(name) VALUES('Urdu');
INSERT INTO language(name) VALUES('Uzbek');
INSERT INTO language(name) VALUES('Vietnamese');
INSERT INTO language(name) VALUES('Volapuk');
INSERT INTO language(name) VALUES('Wolof');
INSERT INTO language(name) VALUES('Xhosa');
INSERT INTO language(name) VALUES('Yoruba');
INSERT INTO language(name) VALUES('Chinese');
INSERT INTO language(name) VALUES('Zulu');

INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','admin','files/Vakcina H1N1.pdf','vakcina, srbija',2009,'Vakcina H1N1',1,2,1);
INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','admin','files/Prve vakcine danas u Srbiji.pdf','vakcine, srbija',2009,'Prve vakcine danas u Srbiji',1,2,1);
INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','admin','files/Pandemija gripa.pdf','sumnja, pandemija, gripa',2009,'Pandemija gripa?',1,2,1);
INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','admin','files/Otvorene dve deonicekoridora 10.pdf','autoput, koridor',2009,'Otvorene dve deonicekoridora 10',2,2,1);
INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','admin','files/Koridor 10 do kraja 2010.pdf','koridor, autoput',2009,'Koridor 10 do kraja 2010',2,2,1);
