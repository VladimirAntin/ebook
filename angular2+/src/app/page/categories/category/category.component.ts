import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {CategoryOrLang} from '../../../model/category-or-lang';
import {MatDialog, MatSnackBar} from '@angular/material';
import {FileService} from '../../../services/file.service';
import {AuthService} from '../../../services/auth.service';
import {AddEbookComponent} from '../add-ebook/add-ebook.component';
import {EbookService} from '../../../services/ebook.service';
import {EditEbookComponent} from "../edit-ebook/edit-ebook.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  filterEbook; filterUser; id;
  category = new CategoryOrLang();
  ebooks = []; usersList = [];
  isAdmin = false;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService,
              private fileService: FileService, private authService: AuthService,
              public dialog: MatDialog, private ebookService: EbookService,
              public snackBar: MatSnackBar) { }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.get();
    this.auth();
  }
  private get() {
    this.categoryService.get(this.id).subscribe(data => {
      this.category = data;
      this.getEbooks();
      this.categoryService.getUsers(this.id).subscribe(dataUsers => this.usersList = dataUsers);
    }, () => this.category = null);
  }

  private getEbooks() {
  this.categoryService.getEbooks(this.id).subscribe(dataEbooks => {
    this.ebooks = dataEbooks;
    this.ebooks.forEach((value, index) => {
      this.fileService.getBlob(this.ebooks[index]);
    });
  });
  }
  private auth() {
    this.authService.me().subscribe(data => this.isAdmin = data.authorities.indexOf('admin') !== -1,
      () => {});
  }

  openPdf(link) { window.open(link, '_blank'); }
  download(filename: string) { this.fileService.downloadFile(filename); }

  add() {
    const dialogRef = this.dialog.open(AddEbookComponent, {
      panelClass: 'dialog-600x800'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ebookService.add(result.file, result.ebook).subscribe(() => {
          this.getEbooks();
          this.snackBar.open('Success, new book is added', 'OK', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error, ebook is not added', 'OK', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  edit(ebook) {
    const dialogRef = this.dialog.open(EditEbookComponent, {
      panelClass: 'dialog-600x600',
      data: {
        ebook: Object.assign({}, ebook)
      }
    });
    const index = this.ebooks.indexOf(ebook);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ebookService.edit(result.ebook).subscribe(data => {
          this.ebooks[index] = data;
          this.snackBar.open('Success, ebook is changed!', 'OK', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error, ebook is not changed!', 'OK', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  delete(ebook) {
    const index = this.ebooks.indexOf(ebook);
    this.snackBar.open(`Ebook with title: '${ebook.title}' will be deleted. ` +
      'Are you sure?', 'Yes', {
      duration: 10000, verticalPosition: 'top'
    }).onAction().subscribe(() => {
      this.ebookService.delete(ebook).subscribe(() => this.ebooks.splice(index, 1),
        () => {});
    });
  }
}
