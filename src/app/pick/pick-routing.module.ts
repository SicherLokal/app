import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickRequestDetailComponent } from './pick-request-detail/pick-request-detail.component';
import { PickRequestListComponent } from './pick-request-list/pick-request-list.component';


const routes: Routes = [
  {
    path: 'request/:id',
    component: PickRequestDetailComponent
  },
  {
    path: 'requests',
    component: PickRequestListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickRoutingModule { }
