import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketSearchComponent } from './market-search/market-search.component';
import { MarketTileComponent } from './market-tile/market-tile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MarketSearchComponent,
    MarketTileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }
