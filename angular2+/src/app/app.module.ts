import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatDialogModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatIconModule,
  MatProgressSpinnerModule, MatTooltipModule, MatSelectModule, MatSnackBarModule, MatChipsModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
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

enableProdMode();

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, UsersComponent,
    AddUserComponent, UserComponent, NavigationComponent, EditUserComponent, NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatInputModule, MatToolbarModule, MatDialogModule,
    MatFormFieldModule, HttpClientModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule,
    MatSnackBarModule, MatChipsModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule,
    MatDialogModule, MatFormFieldModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule,
    MatSnackBarModule, MatChipsModule
  ],
  entryComponents: [ LoginComponent, AddUserComponent, EditUserComponent ],
  providers: [ AuthService, UserService, CategoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
