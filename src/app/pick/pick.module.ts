import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickRoutingModule } from './pick-routing.module';
import { PickRequestListComponent } from './pick-request-list/pick-request-list.component';
import { PickRequestDetailComponent } from './pick-request-detail/pick-request-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [PickRequestListComponent, PickRequestDetailComponent],
  imports: [
    CommonModule,
    PickRoutingModule,
    MatIconModule,
    MatListModule,
  ]
})
export class PickModule { }
