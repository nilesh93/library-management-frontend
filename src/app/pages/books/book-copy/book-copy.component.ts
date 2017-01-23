import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-copy',
  templateUrl: './book-copy.component.html',
  styleUrls: ['./book-copy.component.scss']
})
export class BookCopyComponent implements OnInit {
  src: string = 'http://media.wiley.com/spa_assets/R16B092P2/site/wiley2/cvo/images/placeholders/placeholder_300.gif';
  nav: string = 'SUMMARY';

  constructor() { }

  ngOnInit() {
  }

  changeNav(navType) {
    this.nav = navType;
  }

}
