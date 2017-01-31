import { BookService } from '../../../shared/services/book.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Object = {};
  constructor(private bookService: BookService) {
    this.bookSearch({}, false);
  }

  ngOnInit() {
  }

  bookSearch(values, loadMore) {
    this.bookService.getBooks(values, loadMore).subscribe((data) => {
      this.books = data;
    });
  }


}
