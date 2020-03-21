import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { PickRequestService } from '../pick-request.service';

@Component({
  selector: 'app-pick-request-detail',
  templateUrl: './pick-request-detail.component.html',
  styleUrls: ['./pick-request-detail.component.scss']
})
export class PickRequestDetailComponent {

  public items: Observable<Array<{ id: string, name: string, amount: number }>>;

  constructor(route: ActivatedRoute, pickRequestService: PickRequestService) {
    this.items = route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        pickRequestService.getRequest(params.get('id'))),
      map((req) =>  req.items)
    );
  }

}
