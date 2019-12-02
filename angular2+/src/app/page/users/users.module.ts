import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {UsersComponent} from './users.component';
import {UserComponent} from './user/user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {AddUserComponent} from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [UsersComponent, UserComponent, EditUserComponent, AddUserComponent],
  exports: [UsersComponent, UserComponent, EditUserComponent, AddUserComponent],
  entryComponents: [EditUserComponent, AddUserComponent],
})
export class UsersModule { }
