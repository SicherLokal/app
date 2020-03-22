import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { IdentificationComponent } from './identification/identification.component';
import { ProductMaintenanceComponent } from './product-maintenance/product-maintenance.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'identification',
    component: IdentificationComponent
  },
  {
    path: 'product-maintenance',
    component: ProductMaintenanceComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketAdminRoutingModule { }
