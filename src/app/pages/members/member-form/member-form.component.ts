import { MemberService } from './../../../shared/services/member.service';
import { Router } from '@angular/router';
import { CommonService } from './../../../shared/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  @Input() src: string;
  @Input() editFlag: Boolean = false;
  @Input() details: Object;

  @Output() updateEmitter = new EventEmitter();

  nonEditable: Array<string> = ['archived', 'archived_date', 'ban_status', 'created_at', 'id',
    'image', 'password', 'registration_expire', 'registration_status', 'type', 'updated_at', 'username', 'web_active'];

  form: FormGroup;
  types: Array<any>;
  titles: Array<any>;
  isSubmitted: Boolean = false;

  constructor(private memberService: MemberService, private commonService: CommonService, private router: Router) {
    this.form = new FormGroup({
      'type': new FormControl('', Validators.required),
      'title': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'nic': new FormControl(),
      'ref_id': new FormControl(),
      'mobile': new FormControl('', Validators.required),
      'home': new FormControl(),
      'email': new FormControl(),
      'address': new FormControl(),
      'town': new FormControl(),
      'remarks': new FormControl()
    });

    this.getTypes();
    this.getTitles();

  }

  ngOnInit() {
    if (this.editFlag) {
      this.updateForm();
    }
  }

  getTypes() {
    this.memberService.getTypes().subscribe((data) => {
      this.types = data.results;
      if (this.types[0] && !this.editFlag) {
        this.form.controls['type'].setValue(this.types[0].id);
      }

    });
  }

  getTitles() {
    this.memberService.getTitles().subscribe((data) => {
      this.titles = data.results;
      if (this.titles[0] && !this.editFlag) {
        this.form.controls['title'].setValue(this.titles[0].title);
      }

    });
  }


  updateForm() {

    for (let property in this.details) {
      if (this.details.hasOwnProperty(property)) {
        if ((this.nonEditable.indexOf(property) === -1) && (this.details[property] !== 'N/A')) {

          this.form.controls[property].setValue(this.details[property]);
        }
      }
    }
    if (this.details['type']) {
      this.form.controls['type'].setValue(this.details['type'].id);
    }
    if (this.details['title']) {
      this.form.controls['title'].setValue(this.details['title']);
    }
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.form.valid) {
      let obj = this.form.value;
      obj['image'] = this.src;

      obj = this.commonService.removeEmpty(obj, ['', ' ', null]);
      if (this.editFlag) {
        this.update(obj);
      } else {
        this.save(obj);
      }

    }

  }

  save(obj) {
    this.memberService.saveMember(obj).subscribe((data) => {
      this.commonService.newNotification('success', 'Success!', 'Book saved succesfully!');
      this.router.navigate(['/', 'members', 'view', data.id]);
    });
  }

  update(obj) {
    this.memberService.updateMember(this.details['id'], obj).subscribe((data) => {
      this.updateEmitter.emit({ updated: true });
      this.commonService.newNotification('success', 'Success!', this.details['name'] + ' updated Successfully!');
    });
  }

  validationRule(name) {
    return (!this.form.controls[name].valid && (this.form.controls[name].touched || this.isSubmitted));
  }

}
