import { Routes, RouterModule } from '@angular/router';

import { Home } from './Home';
import {CustomerHomeComponent} from './customer/customer-home/customer-home.component'
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';
import {OpenAccountComponent} from './admin/open-account/open-account.component';
import {UpdateAccountComponent} from './admin/update-account/update-account.component';

const appRoutes: Routes = [
    { path: '', component: AdminHomeComponent, canActivate: [AuthGuard] },
    { path: 'customer', component: CustomerHomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    {
        path: 'createUser',
        component: OpenAccountComponent
      },
      {
        path: 'updateAccount',
        component: UpdateAccountComponent
      },

    // otherwise redirect to employee
   // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);