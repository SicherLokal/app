import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';
import { PickRequestService } from '../pick-request.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { PickRequest } from '../pick-request';

@Component({
  selector: 'app-pick-request-detail',
  templateUrl: './pick-request-detail.component.html',
  styleUrls: ['./pick-request-detail.component.scss']
})
export class PickRequestDetailComponent {
  public selection: Subject<MatSelectionListChange> = new Subject();

  public request: Observable<PickRequest>;
  public items: Observable<Array<{ id: string, name: string, amount: number }>>;

  public isCompletable: Observable<boolean>;

  constructor(route: ActivatedRoute, pickRequestService: PickRequestService) {
    this.request = route.paramMap.pipe(
      switchMap((params: ParamMap) => pickRequestService.getRequest(params.get('id')))
    );

    this.items = this.request.pipe(
      map((req) =>  req.items)
    );

    this.isCompletable = this.selection.pipe(
      withLatestFrom(this.items),
      map(([change, items]) => change.source.selectedOptions.selected.length === items.length)
    )
  }

  updateSelection(update: MatSelectionListChange) {
    this.selection.next(update);
  }
}
