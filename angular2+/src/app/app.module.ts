import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatDialogModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatIconModule,
  MatProgressSpinnerModule, MatTooltipModule, MatSelectModule, MatSnackBarModule, MatChipsModule, MatListModule,
  MatStepperModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './services/auth.service';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { AddUserComponent } from './users/add-user/add-user.component';
import {CategoryService} from './services/category.service';
import {AppRoutingModule} from './app-routing.module';
import { UserComponent } from './users/user/user.component';
import { enableProdMode } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddEditCategoryComponent } from './categories/add-edit-category/add-edit-category.component';
import { SearchPipe } from './pipes/search.pipe';
import { LanguagesComponent } from './languages/languages.component';
import {LanguageService} from './services/language.service';
import { AddEditLangComponent } from './languages/add-edit-lang/add-edit-lang.component';
import { CategoryComponent } from './categories/category/category.component';
import {FileService} from './services/file.service';
import { AddEbookComponent } from './categories/add-ebook/add-ebook.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, UsersComponent,
    AddUserComponent, UserComponent, NavigationComponent, EditUserComponent, NotFoundComponent,
    CategoriesComponent, AddEditCategoryComponent, SearchPipe, LanguagesComponent, AddEditLangComponent,
    CategoryComponent, AddEbookComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatInputModule, MatToolbarModule, MatDialogModule,
    MatFormFieldModule, HttpClientModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule,
    MatSnackBarModule, MatChipsModule, MatListModule, MatStepperModule, ReactiveFormsModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule,
    MatDialogModule, MatFormFieldModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule,
    MatSnackBarModule, MatChipsModule, MatListModule, MatStepperModule
  ],
  entryComponents: [ LoginComponent, AddUserComponent, EditUserComponent,
    AddEditCategoryComponent, AddEditLangComponent, AddEbookComponent ],
  providers: [ AuthService, UserService, CategoryService, LanguageService, FileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
