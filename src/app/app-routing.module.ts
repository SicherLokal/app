import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLocationComponent } from './user-location/user-location.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CartComponent } from './cart/cart.component';
import { PaymentSelectionComponent } from './payment-selection/payment-selection.component';
import { UserSlotComponent } from './user-slot/user-slot.component';


const routes: Routes = [
  { path: 'location', component: UserLocationComponent },
  { path: 'product-list', component: CategoryListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user-data', component: UserDataComponent },
  { path: 'payment-selection', component: PaymentSelectionComponent },
  { path: 'user-slot', component: UserSlotComponent },
  {
    path: 'pick',
    loadChildren: () => import('./pick/pick.module').then(m => m.PickModule),
  },
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }