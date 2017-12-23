import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CategoriesComponent} from './categories/categories.component';
import {LanguagesComponent} from './languages/languages.component';
import {CategoryComponent} from './categories/category/category.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:id', component: CategoryComponent},
  { path: 'languages', component: LanguagesComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
