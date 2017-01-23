import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { Routes } from '@angular/router';



export const USER_ROUTES: Routes = [

    {
        path: 'create',
        component: UserCreateComponent
    },
    {
        path: 'list',
        component: UserListComponent
    },
];
