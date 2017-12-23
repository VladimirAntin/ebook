import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (this.data.add) {
      this.data.category.name = '';
    }
  }
}
