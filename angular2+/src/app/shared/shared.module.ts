import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoutingModule} from './routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule, MatChipsModule,
  MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
  MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {CategoryService} from '../services/category.service';
import {LanguageService} from '../services/language.service';
import {FileService} from '../services/file.service';
import {EbookService} from '../services/ebook.service';
import {SearchService} from '../services/search.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {SearchPipe} from './search.pipe';

@NgModule({
  declarations: [NotFoundComponent, SearchPipe],
  imports: [
    CommonModule, RoutingModule,
    BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatSlideToggleModule,
    MatCheckboxModule, MatInputModule, MatToolbarModule, MatDialogModule, MatMenuModule,
    MatFormFieldModule, HttpClientModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule,
    MatSnackBarModule, MatChipsModule, MatListModule, MatStepperModule
  ],
  exports: [RoutingModule, NotFoundComponent, SearchPipe,
    BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatSlideToggleModule,
    MatCheckboxModule, MatInputModule, MatToolbarModule, MatDialogModule, MatMenuModule,
    MatFormFieldModule, HttpClientModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule,
    MatSnackBarModule, MatChipsModule, MatListModule, MatStepperModule],
  providers: [AuthService, UserService, CategoryService, LanguageService, FileService,
    EbookService, SearchService]
})
export class SharedModule { }
