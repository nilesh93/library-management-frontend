import { CommonService } from './../../../shared/services/common.service';
import { CopyFormComponent } from './../copy-form/copy-form.component';
import { DeleteModalComponent } from './../../../shared/components/delete-modal/delete-modal.component';
import { BookService } from './../../../shared/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-book-copy',
  templateUrl: './book-copy.component.html',
  styleUrls: ['./book-copy.component.scss']
})
export class BookCopyComponent implements OnInit {
  nav: string = 'SUMMARY';

  id: number = 0;
  copy: Object = {
    book_detail: {}
  };
  category: Object = {};
  isloading: boolean = true;


  @ViewChild(CopyFormComponent) copyFormComponent: CopyFormComponent;
  @ViewChild(DeleteModalComponent) deleteModalComponent: DeleteModalComponent;

  constructor(private bookService: BookService, private router: Router,
    private activatedRoute: ActivatedRoute, private commonService: CommonService) {
    this.id = activatedRoute.snapshot.params['id'];
    this.getCopyDetails();
  }

  ngOnInit() {
  }

  getCopyDetails() {
    this.bookService.viewCopy(this.id)
      .subscribe((data) => {
        this.copy = data;
        this.category = data.book_detail.category;
        this.isloading = false;
      });
  }


  changeNav(navType) {
    this.nav = navType;
  }

  editCopy() {
    this.copyFormComponent.updateModal(this.copy);
  }

  reloadData(obj) {
    this.getCopyDetails();
  }

  deleteCopy(id) {
    this.deleteModalComponent.openModal();
  }

  delete() {
    this.bookService.deleteCopy(this.copy['id']).subscribe((data) => {
      this.commonService.newNotification('success', 'Success!', 'Copy deleted succesfully!');
      this.router.navigate(['/', 'books', 'copy-list']);
    });
  }
}
