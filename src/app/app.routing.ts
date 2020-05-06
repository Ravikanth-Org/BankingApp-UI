import { Routes, RouterModule } from '@angular/router';

import { Home } from './Home';
import {CustomerHomeComponent} from './customer/customer-home/customer-home.component'
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: AdminHomeComponent, canActivate: [AuthGuard] },
    { path: 'customer', component: CustomerHomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to employee
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);