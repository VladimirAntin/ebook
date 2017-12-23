import {CategoryOrLang} from './category-or-lang';

export class UserApi {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  authorities: string[];
  categories: CategoryOrLang[];

  public empty() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.password = '';
    this.categories = [];
  }
}
