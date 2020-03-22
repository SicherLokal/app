import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketSearchComponent } from './market-search/market-search.component';


const routes: Routes = [
  {
    path: 'search',
    component: MarketSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
