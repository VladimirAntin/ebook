import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CategoryService} from '../../services/category.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

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
  categories;
  isAdmin = false;
  userIsAdmin = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService,
              private authService: AuthService) {
    if (this.data.user.authorities.indexOf('admin') !== -1) {
      this.data.user.authorities = this.authorities[0].value;
      this.userIsAdmin = true;
    }else {
      this.data.user.authorities = this.authorities[1].value;
    }
    this.getMe();
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(data => this.categories = data);
  }

  private getMe() {
    this.authService.me().subscribe(data => {
      if (data.authorities.indexOf('admin') !== -1) {
      this.isAdmin = true;
    }
    });
  }

}
