import { USER_ROUTES } from './users/users.routing';
import { INVENTORY_ROUTES } from './inventory/inventory.routing';
import { PAYMENT_ROUTES } from './payments/payments.routing';
import { RETURN_ROUTES } from './returns/returns.routing';
import { Routes } from '@angular/router';
import { BOOK_ROUTES } from './books/books.routing';
import { MEMBER_ROUTES } from './members/members.routing';
import { CounterComponent } from './counter/counter.component';



export const PAGE_ROUTES: Routes = [

    {
        path: 'books',
        children: BOOK_ROUTES
    },
    {
        path: 'members',
        children: MEMBER_ROUTES
    },
    {
        path: 'counter',
        component: CounterComponent
    },
    {
        path: 'returns',
        children: RETURN_ROUTES
    },
    {
        path: 'payments',
        children: PAYMENT_ROUTES
    },
    {
        path: 'inventory',
        children: INVENTORY_ROUTES
    },
    {
        path: 'users',
        children: USER_ROUTES
    },

];
