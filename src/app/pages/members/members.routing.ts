import { Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberViewComponent } from './member-view/member-view.component';


export const MEMBER_ROUTES: Routes = [

    {
        path: 'list',
        component: MemberListComponent
    },

    {
        path: 'create',
        component: MemberCreateComponent
    },
    {
        path: 'view/:id',
        component: MemberViewComponent
    }
];
