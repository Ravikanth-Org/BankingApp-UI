import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RecipesComponent } from './recipes.component';
// import { AuthGuard } from '../auth/auth.guard';
// import { RecipeStartComponent } from './recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
// import { RecipesResolverService } from './recipes-resolver.service';


import { OpenAccountComponent } from './open-account/open-account.component'
import { UpdateAccountComponent } from './update-account/update-account.component'
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component'
import {AdminComponent} from './admin.component'

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'createUser', component: OpenAccountComponent },
      { path: 'updateAccount', component: UpdateAccountComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
