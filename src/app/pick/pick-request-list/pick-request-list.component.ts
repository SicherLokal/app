import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PickRequest } from '../pick-request';
import { PickRequestService } from '../pick-request.service';

@Component({
  selector: 'app-pick-request-list',
  templateUrl: './pick-request-list.component.html',
  styleUrls: ['./pick-request-list.component.scss']
})
export class PickRequestListComponent implements OnInit {

  public pickRequests: Observable<Array<PickRequest>>;

  constructor(pickRequestService: PickRequestService) { 
    this.pickRequests = pickRequestService.getRequests();
  }

  ngOnInit(): void {
  }

}
