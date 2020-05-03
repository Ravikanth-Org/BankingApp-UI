import { Routes, RouterModule } from '@angular/router';

import { Home } from './Home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: Home, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to employee
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);