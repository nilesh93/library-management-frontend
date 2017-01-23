import { ImageResult } from 'ng2-imageupload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-create',
  templateUrl: './inventory-create.component.html',
  styleUrls: ['./inventory-create.component.scss']
})
export class InventoryCreateComponent implements OnInit {

  src: string = 'http://cicchettiseattle.com/wp-content/themes/feather13/img/placeholder.png';

  selected(imageResult: ImageResult) {
    this.src = imageResult.dataURL;
  }
  constructor() { }

  ngOnInit() {
  }

}
