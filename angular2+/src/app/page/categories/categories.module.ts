import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CategoriesComponent} from './categories.component';
import {CategoryComponent} from './category/category.component';
import {EditEbookComponent} from './edit-ebook/edit-ebook.component';
import {AddEbookComponent} from './add-ebook/add-ebook.component';
import {AddEditCategoryComponent} from './add-edit-category/add-edit-category.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [CategoriesComponent, CategoryComponent, EditEbookComponent, AddEbookComponent, AddEditCategoryComponent],
  exports: [CategoriesComponent, CategoryComponent, EditEbookComponent, AddEbookComponent, AddEditCategoryComponent],
  entryComponents: [AddEbookComponent, EditEbookComponent, AddEditCategoryComponent ]
})
export class CategoriesModule { }
