import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @ViewChild('deleteModal') modal: ModalComponent;
  @Output() deleteEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modal.open();
  }

  // delete(status): Promise<boolean> {
  //   return new Promise<boolean>((resolve, reject) => {
  //     resolve(status);
  //     this.modal.dismiss();
  //   });
  // }

  delete() {
    this.deleteEmitter.emit({ delete: true });
    this.modal.dismiss();
  }

}
