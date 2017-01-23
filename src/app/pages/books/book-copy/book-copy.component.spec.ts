/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookCopyComponent } from './book-copy.component';

describe('BookCopyComponent', () => {
  let component: BookCopyComponent;
  let fixture: ComponentFixture<BookCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
