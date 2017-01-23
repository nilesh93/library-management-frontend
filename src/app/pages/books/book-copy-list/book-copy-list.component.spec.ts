/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookCopyListComponent } from './book-copy-list.component';

describe('BookCopyListComponent', () => {
  let component: BookCopyListComponent;
  let fixture: ComponentFixture<BookCopyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCopyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCopyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
