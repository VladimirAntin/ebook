import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UserApi} from '../../model/user-api';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id;
  user = new UserApi();
  isAdmin = false;
  constructor(private route: ActivatedRoute, private userService: UserService, public _router: Router) {}
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if ( isNaN(this.id) ) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
    this.get();

    this._router.events.filter((e) => e instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects.indexOf('users/') !== -1) {
          this.id = event.urlAfterRedirects.split('/').pop();
          this.get();
        }
      });
  }

  private get() {
    this.userService.get(this.id).subscribe(data => {
      this.user = data;
      this.isAdmin = data.authorities.indexOf('admin') !== -1;
    }, () => this.user = null);
  }

}
