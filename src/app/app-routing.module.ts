import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLocationComponent } from './user-location/user-location.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UserDataComponent } from './user-data/user-data.component';


const routes: Routes = [
  { path: '', redirectTo: '/location', pathMatch: 'full' },
  { path: 'location', component: UserLocationComponent },
  { path: 'product-list', component: CategoryListComponent },
  { path: 'user-data', component: UserDataComponent },
  {
    path: 'pick',
    loadChildren: () => import('./pick/pick.module').then(m => m.PickModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
