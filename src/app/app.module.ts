import { MemberService } from './shared/services/member.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ImageUploadModule } from 'ng2-imageupload';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { SimpleNotificationsModule } from 'angular2-notifications';


import { BookService } from './shared/services/book.service';
import { CommonService } from './shared/services/common.service';


import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BookCreateComponent } from './pages/books/book-create/book-create.component';
import { BookListComponent } from './pages/books/book-list/book-list.component';
import { BookViewComponent } from './pages/books/book-view/book-view.component';
import { BookViewSummaryComponent } from './pages/books/book-view/book-view-summary/book-view-summary.component';
import { BookViewCopiesComponent } from './pages/books/book-view/book-view-copies/book-view-copies.component';
import { BookFormComponent } from './pages/books/book-form/book-form.component';
import { BookCopyComponent } from './pages/books/book-copy/book-copy.component';
import { BookCopyHistoryComponent } from './pages/books/book-copy/book-copy-history/book-copy-history.component';
import { BookCopyListComponent } from './pages/books/book-copy-list/book-copy-list.component';
import { MemberListComponent } from './pages/members/member-list/member-list.component';
import { MemberCreateComponent } from './pages/members/member-create/member-create.component';
import { MemberFormComponent } from './pages/members/member-form/member-form.component';
import { MemberViewComponent } from './pages/members/member-view/member-view.component';
import { MemberViewSummaryComponent } from './pages/members/member-view/member-view-summary/member-view-summary.component';
import { MemberViewPaymentsComponent } from './pages/members/member-view/member-view-payments/member-view-payments.component';
import { MemberViewActivityComponent } from './pages/members/member-view/member-view-activity/member-view-activity.component';
import { CounterComponent } from './pages/counter/counter.component';
import { PendingReturnsComponent } from './pages/returns/pending-returns/pending-returns.component';
import { ReturnViewComponent } from './pages/returns/return-view/return-view.component';
import { PaymentListComponent } from './pages/payments/payment-list/payment-list.component';
import { PaymentCreateComponent } from './pages/payments/payment-create/payment-create.component';
import { InventoryCreateComponent } from './pages/inventory/inventory-create/inventory-create.component';
import { InventoryListComponent } from './pages/inventory/inventory-list/inventory-list.component';
import { InventoryHistoryComponent } from './pages/inventory/inventory-history/inventory-history.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { CopyFormComponent } from './pages/books/copy-form/copy-form.component';
import { DeleteModalComponent } from './shared/components/delete-modal/delete-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BookCreateComponent,
    BookListComponent,
    BookViewComponent,
    BookViewSummaryComponent,
    BookViewCopiesComponent,
    BookFormComponent,
    BookCopyComponent,
    BookCopyHistoryComponent,
    BookCopyListComponent,
    MemberListComponent,
    MemberCreateComponent,
    MemberFormComponent,
    MemberViewComponent,
    MemberViewSummaryComponent,
    MemberViewPaymentsComponent,
    MemberViewActivityComponent,
    CounterComponent,
    PendingReturnsComponent,
    ReturnViewComponent,
    PaymentListComponent,
    PaymentCreateComponent,
    InventoryCreateComponent,
    InventoryListComponent,
    InventoryHistoryComponent,
    UserCreateComponent,
    UserFormComponent,
    UserListComponent,
    CopyFormComponent,
    DeleteModalComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ImageUploadModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    Ng2Bs3ModalModule,
    ReactiveFormsModule,
    SimpleNotificationsModule
  ],
  providers: [
    BookService,
    CommonService,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
