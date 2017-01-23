import { ReturnViewComponent } from './return-view/return-view.component';
import { Routes } from '@angular/router';
import { PendingReturnsComponent } from './pending-returns/pending-returns.component';



export const RETURN_ROUTES: Routes = [

    {
        path: 'pending',
        component: PendingReturnsComponent
    },
    {
        path: 'view/:id',
        component: ReturnViewComponent
    },
];
