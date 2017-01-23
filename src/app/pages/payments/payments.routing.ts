import { PaymentListComponent } from './payment-list/payment-list.component';
import { Routes } from '@angular/router';
import { PaymentCreateComponent } from './payment-create/payment-create.component';



export const PAYMENT_ROUTES: Routes = [

    {
        path: 'list',
        component: PaymentListComponent
    },
    {
        path: 'create',
        component: PaymentCreateComponent
    },
];
