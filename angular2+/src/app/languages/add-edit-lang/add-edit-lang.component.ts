import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-edit-lang',
  templateUrl: './add-edit-lang.component.html',
  styleUrls: ['./add-edit-lang.component.css']
})
export class AddEditLangComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (this.data.add) {
      this.data.lang.name = '';
    }
  }

}
