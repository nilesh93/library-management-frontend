import { Component, OnInit } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  src: string = 'http://media.wiley.com/spa_assets/R16B092P2/site/wiley2/cvo/images/placeholders/placeholder_300.gif';

  selected(imageResult: ImageResult) {
    this.src = imageResult.dataURL;
  }
  constructor() { }

  ngOnInit() {
  }

}
