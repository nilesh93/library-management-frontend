import { CopyFormComponent } from './../copy-form/copy-form.component';
import { BookService } from './../../../shared/services/book.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  @ViewChild(CopyFormComponent) copyFormComponent: CopyFormComponent;

  nav: string = 'SUMMARY';
  id: number;

  bookDetails = {};
  category = {};
  copies: Array<Object> = [];

  selected(imageResult: ImageResult) {
    this.bookDetails['image'] = imageResult.dataURL;
  }

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.getBookDetails();
  }

  ngOnInit() {
  }

  changeNav(navType) {
    this.nav = navType;
  }

  getBookDetails() {
    this.bookService.viewBook(this.id).subscribe((data) => {
      this.bookDetails = data;
      this.category = this.bookDetails['category'];
      this.copies = this.bookDetails['copies'];
    });
  }

  reloadData(obj) {
    if (obj.updated) {
      this.getBookDetails();
      if (this.nav === 'EDIT') { this.nav = 'SUMMARY' };
    }
  }

  addNewCopy() {
    this.copyFormComponent.openModal();
  }


}
