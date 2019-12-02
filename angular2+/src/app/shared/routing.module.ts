import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {UsersComponent} from '../page/users/users.component';
import {UserComponent} from '../page/users/user/user.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CategoriesComponent} from '../page/categories/categories.component';
import {LanguagesComponent} from '../page/languages/languages.component';
import {CategoryComponent} from '../page/categories/category/category.component';

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
export class RoutingModule { }
