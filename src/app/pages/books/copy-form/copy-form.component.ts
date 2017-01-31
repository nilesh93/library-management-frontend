import { BookService } from './../../../shared/services/book.service';
import { CommonService } from './../../../shared/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-copy-form',
  templateUrl: './copy-form.component.html',
  styleUrls: ['./copy-form.component.scss']
})
export class CopyFormComponent implements OnInit {
  @Input() editFlag: Boolean = false;
  @Input() copy: Object;
  @Input() id: number;
  @ViewChild('copyModal') modal: ModalComponent;
  @Output() updateEmitter = new EventEmitter();

  copyForm: FormGroup;
  isSubmitted: Boolean = false;
  nonEditable: Array<string> = ['archived', 'archived_date', 'book_detail', 'id', 'return_date', 'taken'];

  constructor(private commonService: CommonService, private bookService: BookService) {
    this.copyForm = new FormGroup({
      'ref_id': new FormControl('', Validators.required),
      'remarks': new FormControl()
    });
  }

  ngOnInit() {
  }

  openModal() {
    this.modal.open();
  }

  updateModal(copy) {
    this.copy = copy;
    if (this.editFlag) {
      console.log(this.copy);
      this.modal.open();
      this.updateForm();
    }
  }

  updateForm() {

    for (let property in this.copy) {
      if (this.copy.hasOwnProperty(property)) {
        if ((this.nonEditable.indexOf(property) === -1) && (this.copy[property] !== 'N/A')) {

          this.copyForm.controls[property].setValue(this.copy[property]);
        }
      }
    }
  }


  submitForm() {
    this.isSubmitted = true;
    if (this.copyForm.valid) {
      let obj = this.copyForm.value;
      obj['book_detail'] = this.id;

      obj = this.commonService.removeEmpty(obj, ['', ' ', null]);
      if (this.editFlag) {
        this.updateCopy(obj);
      } else {
        this.saveCopy(obj);
      }

    }

  }

  updateCopy(obj) {
    this.bookService.updateCopy(this.copy['id'], obj).subscribe((data) => {
      this.updateEmitter.emit({ updated: true });
      this.modal.dismiss();
      this.commonService.newNotification('success', 'Success!', 'Copy ' + obj.ref_id + ' updated succesfully!');

    });
  }

  saveCopy(obj) {
    this.bookService.saveCopy(obj).subscribe((data) => {
      this.updateEmitter.emit({ updated: true });
      this.modal.dismiss();
      this.commonService.newNotification('success', 'Success!', 'Copy added succesfully!');

    });
  }
  validationRule(name) {
    return (!this.copyForm.controls[name].valid && (this.copyForm.controls[name].touched || this.isSubmitted));
  }
}
