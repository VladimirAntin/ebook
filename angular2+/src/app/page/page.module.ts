import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {UsersModule} from './users/users.module';
import {CategoriesModule} from './categories/categories.module';
import {LanguagesModule} from './languages/languages.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, UsersModule, CategoriesModule, LanguagesModule
  ],
  exports: [UsersModule, CategoriesModule, LanguagesModule]
})
export class PageModule { }
