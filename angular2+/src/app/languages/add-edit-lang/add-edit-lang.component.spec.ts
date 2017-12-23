import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLangComponent } from './add-edit-lang.component';

describe('AddEditLangComponent', () => {
  let component: AddEditLangComponent;
  let fixture: ComponentFixture<AddEditLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
