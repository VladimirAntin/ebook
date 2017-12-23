import { Component } from '@angular/core';
import {CategoryService} from '../services/category.service';
import {AuthService} from '../services/auth.service';
import {AddEditCategoryComponent} from './add-edit-category/add-edit-category.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CategoryOrLang} from '../model/category-or-lang';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  filter;
  categories;
  isAdmin = false;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
              private categoryService: CategoryService, private authService: AuthService) {
    this.getAll();
    this.checkAdmin();
  }

  getAll() {
    this.categoryService.getAll().subscribe(data => this.categories = data );
  }

  private checkAdmin() {
    this.authService.me().subscribe(data => {
      this.isAdmin = data.authorities.indexOf('admin') !== -1;
    });
  }

  add() {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      panelClass: 'dialog-600x400',
      data: {
        add: true, title: 'Add new category', icon: 'add',
        tooltip: 'Add category', category: new CategoryOrLang()
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.add(result.category).subscribe( data => {
          this.categories.push(data);
          this.snackBar.open('Successfully added!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error with add new category!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  edit(category) {
    const index = this.categories.indexOf(category);
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      panelClass: 'dialog-600x400',
      data: {
        title: 'Edit category', icon: 'edit',
        tooltip: 'Edit category', category: Object.assign({}, category)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.edit(result.category).subscribe( data => {
          this.categories[index] = data;
          this.snackBar.open('Successfully changed!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error with change category attributes', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  deleteCategory(category) {
    const index = this.categories.indexOf(category);
    this.snackBar.open('All users and ebooks will be deleted which belong on this category. ' +
      'Are you sure? ', 'Yes', {
      duration: 10000, verticalPosition: 'top'
    }).onAction().subscribe(() => {
      this.categoryService.delete(category).subscribe(() => this.categories.splice(index, 1));
    });
  }

}
