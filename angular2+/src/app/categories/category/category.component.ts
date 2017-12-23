import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {CategoryOrLang} from '../../model/category-or-lang';
import {MatDialog } from '@angular/material';
import {FileService} from '../../services/file.service';
import {AuthService} from '../../services/auth.service';
import {Ebook} from '../../model/ebook';
import {AddEbookComponent} from '../add-ebook/add-ebook.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  filterEbook;
  filterUser;
  id;
  category = new CategoryOrLang();
  ebooks = [];
  usersList = [];
  isAdmin = false;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService,
              private fileService: FileService, private authService: AuthService, public dialog: MatDialog, ) { }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.get();
    this.auth();
  }
  private get() {
    this.categoryService.get(this.id).subscribe(data => {
      this.category = data;
      this.categoryService.getEbooks(this.id).subscribe(dataEbooks => {
        this.ebooks = dataEbooks;
        this.ebooks.forEach((value, index) => {
          this.fileService.getBlob(this.ebooks[index]);
        });
      });
      this.categoryService.getUsers(this.id).subscribe(dataUsers => this.usersList = dataUsers);
    }, () => this.category = null);
  }

  private auth() {
    this.authService.me().subscribe(data => this.isAdmin = data.authorities.indexOf('admin') !== -1,
      () => {});
  }

  openPdf(link) { window.open(link, '_blank'); }
  download(filename: string) { this.fileService.downloadFile(filename); }

  add() {
    const dialogRef = this.dialog.open(AddEbookComponent, {
      panelClass: 'dialog-600x600',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {}
    });
  }
}
