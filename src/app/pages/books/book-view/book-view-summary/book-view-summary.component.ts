import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-view-summary',
  templateUrl: './book-view-summary.component.html',
  styleUrls: ['./book-view-summary.component.scss']
})
export class BookViewSummaryComponent implements OnInit {
  @Input() bookDetails: Object = {};
  @Input() category: Object = {};
  @Input() showStats: Boolean = true;
  @Input() copyDetails: Object = {};

  constructor() { }

  ngOnInit() {
  }

}
