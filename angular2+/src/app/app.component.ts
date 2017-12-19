import {Component} from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { User } from './model/user';
import {AuthService} from './services/auth.service';
import { UserApi } from './model/user-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav_items;
  login: boolean;
  me = new UserApi();
  constructor(public dialog: MatDialog, private authService: AuthService) {
    this.check();
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'dialog-600x400',
      data: {
        user: new User()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.loginPost(result.user)
          .subscribe(data => {
            this.authService.setToken(data);
            this.check();
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

  logout() {
    this.authService.logout();
  }

  private navItems() {
    this.authService.nav_items().subscribe(data => {
      this.nav_items = data;
      this.authService.me().subscribe(user => this.me = user, () => {});
    }, () => {
      this.nav_items = [];
    });
  }

}
