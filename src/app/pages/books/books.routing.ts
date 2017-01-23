import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookCopyComponent } from './book-copy/book-copy.component';
import { BookCopyListComponent } from './book-copy-list/book-copy-list.component';

export const BOOK_ROUTES: Routes = [

    {
        path: 'list',
        component: BookListComponent
    },

    {
        path: 'create',
        component: BookCreateComponent
    },
    {
        path: 'view/:id',
        component: BookViewComponent
    },
     {
        path: 'copy-list',
        component: BookCopyListComponent
    },
    {
        path: 'copy/:id',
        component: BookCopyComponent
    }
];
