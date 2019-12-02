import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {UserApi} from '../../model/user-api';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['name', 'surname', 'username', 'authorities', 'options'];
  users = new MatTableDataSource();
  loading: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.users.filter = filterValue;
  }
  constructor(public dialog: MatDialog, private userService: UserService, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.users.paginator = this.paginator;
    this.getAll();
  }

  deleteUser(user: UserApi) {
    this.snackBar.open('Are you sure?', 'Yes', {
      duration: 10000, verticalPosition: 'top'
    }).onAction().subscribe(() => {
      this.users.data = this.users.data.filter(u => u !== user);
      this.userService.delete(user).subscribe(() => this.getAll() );
    });
  }
  getAll(): void {
    this.loading = true;
    this.userService.getAll().subscribe(data => {
      this.users.data = data;
      this.users.paginator = this.paginator;
      this.loading = false;
    }, err => {
      if (err.status !== 403) {
        this.snackBar.open('Something is wrong with the server', 'OK', {
          duration: 4000, verticalPosition: 'top'
        });
      }else {
        this.users.data = null;
      }
    });
  }

  addUser() {
      const dialogRef = this.dialog.open(AddUserComponent, {
        panelClass: 'dialog-600x600',
        data: {
          user: new UserApi()
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.userService.add(result.user).subscribe( () => {
            this.getAll();
            this.snackBar.open('Successfully added!', 'Ok', {
              duration: 4000, verticalPosition: 'top'
            });
          }, () => {
            this.snackBar.open(`Error, user with username: '${result.user.username}' can not be added`, 'Ok', {
              duration: 4000, verticalPosition: 'top'
            });
          });
        }
      });
  }

  updateUser(user) {
    const dialogRef = this.dialog.open(EditUserComponent, {
      panelClass: 'dialog-600x600',
      data: {
        user: Object.assign({}, user)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.update(result.user).subscribe(() => {
          this.getAll();
          this.snackBar.open('Successfully changed!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open(`Error, user with username ${result.user.username} is already exists`, 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }
}
