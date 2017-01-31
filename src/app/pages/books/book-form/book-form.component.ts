import { CommonService } from './../../../shared/services/common.service';
import { BookService } from './../../../shared/services/book.service';
import { FormsModule, FormGroup, FormControl, Validators, } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @Input() src: string;
  @Input() editFlag: Boolean = false;
  @Input() bookDetails: Object;

  @Output() updateEmitter = new EventEmitter();

  nonEditable: Array<string> = ['available_copies', 'image', 'category', 'copies', 'created_at', 'id',
    'taken_copies', 'total_copies', 'updated_at'];

  bookForm: FormGroup;
  categories: Array<any>;
  isSubmitted: Boolean = false;

  constructor(private bookService: BookService, private commonService: CommonService, private router: Router) {
    this.bookForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'author': new FormControl('', Validators.required),
      'editor': new FormControl(),
      'publisher': new FormControl(),
      'published_year': new FormControl(),
      'category': new FormControl(),
      'cl_num': new FormControl('', Validators.required),
      'isbn': new FormControl(),
      'series': new FormControl(),
      'series_num': new FormControl(),
      'pages': new FormControl(),
      'height': new FormControl(),
      'remarks': new FormControl(),
      'summary': new FormControl()
    });

    this.getCategories();

  }

  ngOnInit() {
    if (this.editFlag) {
      this.updateForm();
    }
  }

  getCategories() {
    this.bookService.getCategories().subscribe((data) => {
      this.categories = data.results;
      if (this.categories[0] && !this.editFlag) {
        this.bookForm.controls['category'].setValue(this.categories[0].id);
      }

    });
  }

  updateForm() {

    for (let property in this.bookDetails) {
      if (this.bookDetails.hasOwnProperty(property)) {
        if ((this.nonEditable.indexOf(property) === -1) && (this.bookDetails[property] !== 'N/A')) {

          this.bookForm.controls[property].setValue(this.bookDetails[property]);
        }
      }
    }
    if (this.bookDetails['category']) {
      this.bookForm.controls['category'].setValue(this.bookDetails['category'].id);
    }
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.bookForm.valid) {
      let obj = this.bookForm.value;
      obj['image'] = this.src;

      obj = this.commonService.removeEmpty(obj, ['', ' ', null]);
      if (this.editFlag) {
        this.updateBook(obj);
      } else {
        this.saveBook(obj);
      }

    }

  }

  saveBook(obj) {
    this.bookService.saveBook(obj).subscribe((data) => {
      this.commonService.newNotification('success', 'Success!', 'Book saved succesfully!');
      this.router.navigate(['/', 'books', 'view', data.id]);
    });
  }

  updateBook(obj) {
    this.bookService.updateBook(this.bookDetails['id'], obj).subscribe((data) => {
      this.updateEmitter.emit({ updated: true });
      this.commonService.newNotification('success', 'Success!', this.bookDetails['title'] + ' updated Successfully!');
    });
  }

  validationRule(name) {
    return (!this.bookForm.controls[name].valid && (this.bookForm.controls[name].touched || this.isSubmitted));
  }

}
