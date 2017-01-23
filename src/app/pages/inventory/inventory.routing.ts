import { InventoryHistoryComponent } from './inventory-history/inventory-history.component';
import { InventoryCreateComponent } from './inventory-create/inventory-create.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { Routes } from '@angular/router';




export const INVENTORY_ROUTES: Routes = [

    {
        path: 'list',
        component: InventoryListComponent
    },
    {
        path: 'create',
        component: InventoryCreateComponent
    },
    {
        path: 'view/:id',
        component: InventoryHistoryComponent
    },
];
