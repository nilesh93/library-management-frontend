import { DeleteModalComponent } from './../../../../shared/components/delete-modal/delete-modal.component';
import { CommonService } from './../../../../shared/services/common.service';
import { BookService } from './../../../../shared/services/book.service';
import { CopyFormComponent } from './../../copy-form/copy-form.component';
import { Component, OnInit, ViewContainerRef, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-book-view-copies',
  templateUrl: './book-view-copies.component.html',
  styleUrls: ['./book-view-copies.component.scss']
})
export class BookViewCopiesComponent implements OnInit {
  @Input() id: number;
  @Input() copies: Array<Object>;
  @Output() updateEmitter = new EventEmitter();

  copyId: number;

  @ViewChild(CopyFormComponent) copyFormComponent: CopyFormComponent;
  @ViewChild(DeleteModalComponent) deleteModalComponent: DeleteModalComponent;


  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal,
    private bookService: BookService, private commonService: CommonService) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

  editCopy(copy) {
    this.copyFormComponent.updateModal(copy);
  }

  reloadData(obj) {
    this.updateEmitter.emit({ updated: true });
  }

  deleteCopy(id) {
    this.copyId = id;
    this.deleteModalComponent.openModal();
  }

  delete() {
    this.bookService.deleteCopy(this.copyId).subscribe((data) => {
      this.commonService.newNotification('success', 'Success!', 'Copy deleted succesfully!');
      this.updateEmitter.emit({ updated: true });
    });
  }
}
