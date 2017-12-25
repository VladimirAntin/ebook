import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatChipInputEvent} from '@angular/material';
import {CategoryService} from '../../services/category.service';
import {LanguageService} from '../../services/language.service';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-edit-ebook',
  templateUrl: './edit-ebook.component.html',
  styleUrls: ['./edit-ebook.component.css']
})
export class EditEbookComponent {

  separatorKeysCodes = [ENTER, COMMA, SPACE];
  categories; languages; keywords = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService,
              private languageService: LanguageService) {
    this.getCategoriesAndLanguages();
    this.keywords = this.data.ebook.keywords.split(', ');
  }
  getCategoriesAndLanguages() {
    this.categoryService.getAll().subscribe(data => this.categories = data);
    this.languageService.getAll().subscribe(data => this.languages = data);
  }

  addKey(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.keywords.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    this.data.ebook.keywords = this.keywords.join(', ');
  }
  removeKey(key: string): void {
    const index = this.keywords.indexOf(key);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
    this.data.ebook.keywords = this.keywords.join(', ');
  }
}
