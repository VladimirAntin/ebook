import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {LanguagesComponent} from './languages.component';
import {AddEditLangComponent} from './add-edit-lang/add-edit-lang.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [LanguagesComponent, AddEditLangComponent],
  exports: [LanguagesComponent, AddEditLangComponent],
  entryComponents: [AddEditLangComponent],
})
export class LanguagesModule { }
