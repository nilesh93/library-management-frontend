import { MemberService } from './../../../shared/services/member.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  members: Object = {};

  constructor(private memberService: MemberService) {
    this.search({}, false);
  }

  ngOnInit() {
  }

  search(values, loadMore) {
    this.memberService.getMembers(values, loadMore).subscribe((data) => {
      this.members = data;
      console.log(data);
    });
  }
}
