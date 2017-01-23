import { ImageResult } from 'ng2-imageupload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {

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
