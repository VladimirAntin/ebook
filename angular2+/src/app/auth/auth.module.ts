import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [LoginComponent, ChangePasswordComponent],
  exports: [LoginComponent, ChangePasswordComponent],
  entryComponents: [LoginComponent, ChangePasswordComponent]
})
export class AuthModule { }
