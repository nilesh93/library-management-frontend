import { ImageResult } from 'ng2-imageupload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-history',
  templateUrl: './inventory-history.component.html',
  styleUrls: ['./inventory-history.component.scss']
})
export class InventoryHistoryComponent implements OnInit {
  nav: string = 'SUMMARY';
  src: string = 'http://combonetwork.com/img/empty_profile.png';

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
