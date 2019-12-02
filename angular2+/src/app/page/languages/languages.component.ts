import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CategoryOrLang} from '../../model/category-or-lang';
import {LanguageService} from '../../services/language.service';
import {AddEditLangComponent} from './add-edit-lang/add-edit-lang.component';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {

  filter; languages;
  isAdmin = false;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
              private languageService: LanguageService, private authService: AuthService) {
    this.getAll();
    this.checkAdmin();
  }

  getAll() {
    this.languageService.getAll().subscribe(data => {
      this.languages = data;
    }, () => {
      this.snackBar.open('Error with read languages!', 'Ok', {
        duration: 4000, verticalPosition: 'top'
      });
    });
  }
  private checkAdmin() {
    this.authService.me().subscribe(data => {
      this.isAdmin = data.authorities.indexOf('admin') !== -1;
    }, () => {});
  }

  add() {
    const dialogRef = this.dialog.open(AddEditLangComponent, {
      panelClass: 'dialog-600x400',
      data: {
        add: true, title: 'Add new language', icon: 'add',
        tooltip: 'Add category', lang: new CategoryOrLang()
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.languageService.add(result.lang).subscribe( data => {
          this.languages.push(data);
          this.snackBar.open('Successfully added!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error with add new language', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  edit(lang) {
    const index = this.languages.indexOf(lang);
    const dialogRef = this.dialog.open(AddEditLangComponent, {
      panelClass: 'dialog-600x400',
      data: {
        title: 'Edit language', icon: 'edit',
        tooltip: 'Edit language', lang: Object.assign({}, lang)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.languageService.edit(result.lang).subscribe( data => {
          this.languages[index] = data;
          this.snackBar.open('Successfully changed!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error with change language attributes', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  deleteLanguage(lang) {
    const index = this.languages.indexOf(lang);
    this.snackBar.open(`All ebooks written in the ${lang.name} will be deleted. ` +
      'Are you sure?', 'Yes', {
      duration: 10000, verticalPosition: 'top'
    }).onAction().subscribe(() => {
      this.languageService.delete(lang).subscribe(() => this.languages.splice(index, 1),
        () => {});
    });
  }

}
