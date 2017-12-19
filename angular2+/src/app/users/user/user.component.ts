import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UserApi} from '../../model/user-api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id;
  user = new UserApi();
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
  isAdmin;
  constructor(private route: ActivatedRoute, private userService: UserService, private authService: AuthService) {}
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if ( isNaN(this.id) ) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
    this.get();
  }

  private get() {
    this.userService.get(this.id).subscribe(data => {
      this.user = data;
      this.isAdmin = data.authorities.indexOf('admin') !== -1;
    });
//    this.authService.me().subscribe(data => {
//      this.isAdmin = data.authorities.indexOf('admin') !== -1;
//    });
  }

}
