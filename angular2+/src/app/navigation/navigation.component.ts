import { Component } from '@angular/core';
import {LoginComponent} from '../auth/login/login.component';
import {AuthService} from '../services/auth.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {UserApi} from '../model/user-api';
import {User} from '../model/user';
import {EditUserComponent} from '../page/users/edit-user/edit-user.component';
import {UserService} from '../services/user.service';
import {NavItem} from '../model/nav-item';
import {ChangePasswordComponent} from "../auth/change-password/change-password.component";
import {UserPassword} from "../model/user-password";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  nav_items: NavItem[]; login: boolean;
  me = new UserApi();
  constructor(public dialog: MatDialog, private authService: AuthService,
              private userService: UserService, public snackBar: MatSnackBar, private _router: Router) {
    this.check();
  }

  loginPage() {
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'dialog-600x400',
      data: { user: new User() }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.loginPost(result.user).subscribe(data => {
            this.authService.setToken(data);
            window.location.reload();
          }, () => {
            this.snackBar.open('Login data is not valid! Please login!', 'Login', {
              duration: 4000, verticalPosition: 'top'
            }).onAction().subscribe(() => this.loginPage());
          });
      }
    });
  }
  private check() {
    this.login = false;
    this.authService.check().subscribe(() => {
      this.login = true;
      this.navItems();
    },  err => {
      if (err.status !== 403) {
        this.authService.removeToken();
        setTimeout(() => this.check(), 3000);
      }
      this.login = false;
      this.navItems();
    });
  }

  logout() { this.authService.logout(); }

  private navItems() {
    this.authService.nav_items().subscribe(data => {
      this.nav_items = data;
      this.authService.me().subscribe(user => this.me = user, () => {});
    }, () => this.nav_items = []);
  }

  editProfile() {
    const dialogRef = this.dialog.open(EditUserComponent, {
      panelClass: 'dialog-600x600',
      data: { user: Object.assign({}, this.me) }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.update(result.user).subscribe(data => {
          this.me = data;
          this.snackBar.open('Successfully changed!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
          if (window.location.href.indexOf('users') !== -1) {
            window.location.reload();
          }
        });
      }
    });
  }
  changePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'dialog-600x400',
      data: { user: new UserPassword() }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.changePassword(this.me.id, result.user).subscribe(() => {
          this.snackBar.open('Successfully changed!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error with change password!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

}
