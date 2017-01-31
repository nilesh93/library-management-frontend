import { BookService } from './../../../shared/services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-copy-list',
  templateUrl: './book-copy-list.component.html',
  styleUrls: ['./book-copy-list.component.scss']
})
export class BookCopyListComponent implements OnInit {

  copies: Object = {};
  constructor(private bookService: BookService) {
    this.copySearch({}, false);
  }


  ngOnInit() {
  }

  copySearch(values, loadMore) {

    this.bookService.getCopies(values, loadMore).subscribe((data) => {
      this.copies = data;
      console.log(data);
    });
  }

}
