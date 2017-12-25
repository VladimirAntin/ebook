INSERT INTO authority(name) VALUES ('ROLE_ADMIN')
INSERT INTO authority(name) VALUES ('ROLE_PRETPLATILAC')
INSERT INTO authority(name) VALUES ('ROLE_POSETILAC')

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

INSERT INTO language(name) VALUES ('English');
INSERT INTO language(name) VALUES ('Serbian');
INSERT INTO language(name) VALUES ('German');

-- INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','Miki','files/Vakcina H1N1.pdf','vakcina, srbija',2009,'Vakcina H1N1',1,2,1);
-- INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','Miki','files/Prve vakcine danas u Srbiji.pdf','vakcine, srbija',2009,'Prve vakcine danas u Srbiji',1,2,1);
-- INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','Miki','files/Pandemija gripa.pdf','sumnja, pandemija, gripa',2009,'Pandemija gripa?',1,2,1);
-- INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','Miki','files/Otvorene dve deonicekoridora 10.pdf','autoput, koridor',2009,'Otvorene dve deonicekoridora 10',2,2,1);
-- INSERT INTO ebook(mime,author,filename,keywords,publication_year,title,category_id,language_id,user_id) VALUES ('application/pdf','Miki - copy sa B92','files/Koridor 10 do kraja 2010.pdf','koridor, autoput',2009,'Koridor 10 do kraja 2010',2,2,1);
