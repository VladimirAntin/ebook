import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatDialogModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatIconModule,
  MatProgressSpinnerModule, MatTooltipModule, MatSelectModule, MatSnackBarModule, MatChipsModule, MatListModule,
  MatStepperModule, MatSlideToggleModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule } from '@angular/forms';
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
import {EbookService} from './services/ebook.service';
import { EditEbookComponent } from './categories/edit-ebook/edit-ebook.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {SearchService} from './services/search.service';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, UsersComponent,
    AddUserComponent, UserComponent, NavigationComponent, EditUserComponent, NotFoundComponent,
    CategoriesComponent, AddEditCategoryComponent, SearchPipe, LanguagesComponent, AddEditLangComponent,
    CategoryComponent, AddEbookComponent, EditEbookComponent, ChangePasswordComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatSlideToggleModule,
    MatCheckboxModule, MatInputModule, MatToolbarModule, MatDialogModule,
    MatFormFieldModule, HttpClientModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule,
    MatSnackBarModule, MatChipsModule, MatListModule, MatStepperModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule,
    MatDialogModule, MatFormFieldModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule,
    MatSnackBarModule, MatChipsModule, MatListModule, MatStepperModule, MatSlideToggleModule
  ],
  entryComponents: [ LoginComponent, AddUserComponent, EditUserComponent, ChangePasswordComponent,
    AddEditCategoryComponent, AddEditLangComponent, AddEbookComponent, EditEbookComponent ],
  providers: [ AuthService, UserService, CategoryService, LanguageService, FileService,
    EbookService, SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
