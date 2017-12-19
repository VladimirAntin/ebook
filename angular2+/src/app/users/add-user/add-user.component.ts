import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  authorities =
    [
      {
        name: 'Admin',
        value: ['admin'],
      },
      {
        name: 'Pretplatilac',
        value: ['pretplatilac']
      }
    ];
  categories = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService) {
    this.data.user.empty();
    this.data.user.authorities = this.authorities[1].value;
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(data => this.categories = data);
  }
}
