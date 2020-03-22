import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketAdminRoutingModule } from './market-admin-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { IdentificationComponent } from './identification/identification.component';
import { ProductMaintenanceComponent } from './product-maintenance/product-maintenance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ RegistrationComponent, IdentificationComponent, ProductMaintenanceComponent, DashboardComponent],
  imports: [
    CommonModule,
    MarketAdminRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ]
})
export class MarketAdminModule { }
