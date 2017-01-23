import { Component, OnInit } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {

  src: string = 'http://media.wiley.com/spa_assets/R16B092P2/site/wiley2/cvo/images/placeholders/placeholder_300.gif';
  nav: string = 'SUMMARY';

  selected(imageResult: ImageResult) {
    this.src = imageResult.dataURL;
  }

  constructor() { }

  ngOnInit() {
  }

  changeNav(navType) {
    this.nav = navType;
  }

}
