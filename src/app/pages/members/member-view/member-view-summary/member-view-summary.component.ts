import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-view-summary',
  templateUrl: './member-view-summary.component.html',
  styleUrls: ['./member-view-summary.component.scss']
})
export class MemberViewSummaryComponent implements OnInit {
  @Input() details: Object = {};
  @Input() type: Object = {};

  constructor() { }

  ngOnInit() {
  }

}
