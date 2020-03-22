import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RegistrationComponent } from './registration/registration.component';
import { MarketAdminRoutingModule } from './market-admin-routing.module';



@NgModule({
  declarations: [LandingComponent, RegistrationComponent],
  imports: [
    CommonModule,
    MarketAdminRoutingModule
  ]
})
export class MarketAdminModule { }
