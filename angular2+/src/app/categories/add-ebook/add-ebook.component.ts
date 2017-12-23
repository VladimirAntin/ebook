import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatChipInputEvent, MatSnackBar} from '@angular/material';
import {FileService} from '../../services/file.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Ebook} from '../../model/ebook';
import {ENTER, COMMA, SPACE} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-add-ebook',
  templateUrl: './add-ebook.component.html',
  styleUrls: ['./add-ebook.component.css']
})
export class AddEbookComponent {

  step1;
  file: File = null;
  separatorKeysCodes = [ENTER, COMMA, SPACE];
  ebook = new Ebook().empty();
  keywords = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar,
              private fileService: FileService, private formBuilder: FormBuilder) {
    this.step1 = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length === 1) {
      this.file = fileList[0];
        this.fileService.checkUploadEbook(this.file).subscribe(data => {
          this.ebook = data;
          if (this.ebook.title === null) {
            this.ebook.title = '';
          }
          if (this.ebook.author === null) {
            this.ebook.author = '';
          }
          if (this.ebook.keywords === null) {
            this.ebook.keywords = '';
          }else {
            this.keywords = this.ebook.keywords.split(', ');
          }
        } );
    } else {
      this.snackBar.open('Only one file can be uploaded', 'Ok', {
        duration: 4000, verticalPosition: 'top'
      });
    }
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
    this.ebook.keywords = this.keywords.join(', ');
  }
  removeKey(key: string): void {
    const index = this.keywords.indexOf(key);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
    this.ebook.keywords = this.keywords.join(', ');
  }
}
