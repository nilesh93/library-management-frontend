import { ActivatedRoute } from '@angular/router';
import { MemberService } from './../../../shared/services/member.service';
import { ImageResult } from 'ng2-imageupload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {

  nav: string = 'SUMMARY';
  id: number;

  details: Object = {};
  type: Object = {};

  constructor(private memberService: MemberService, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.getDetails();
  }

  ngOnInit() {
  }

  selected(imageResult: ImageResult) {
    this.details['image'] = imageResult.dataURL;
  }

  changeNav(navType) {
    this.nav = navType;
  }

  getDetails() {
    this.memberService.viewMember(this.id)
      .subscribe((data) => {
        console.log(data);
        this.details = data;
        this.type = data.type;
      });
  }

  reloadData(obj) {
    this.getDetails();
    if (this.nav === 'EDIT') { this.nav = 'SUMMARY' };

  }

}
