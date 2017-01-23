import { ImageResult } from 'ng2-imageupload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent implements OnInit {

  src: string = 'http://combonetwork.com/img/empty_profile.png';

  selected(imageResult: ImageResult) {
    this.src = imageResult.dataURL;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
