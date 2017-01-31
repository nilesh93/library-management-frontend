import { BookService } from './../../../../shared/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-copy-history',
  templateUrl: './book-copy-history.component.html',
  styleUrls: ['./book-copy-history.component.scss']
})
export class BookCopyHistoryComponent implements OnInit {

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
