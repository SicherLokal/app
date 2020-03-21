import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PickRequest } from './pick-request';

const MOCK_REQUESTS: Array<PickRequest> = [
  { 
    id: 'british_bird', 
    items: [
      { id: 'small_penguin', name: 'Milch (laktosefrei)', amount: 4 },
      { id: 'inspiring_pudding', name: 'Spagetti', amount: 2 },
      { id: 'slow_lion', name: 'Passierte Tomaten (500ml)', amount: 4 },
      { id: 'cool_giraf', name: 'Naturtofu (250g)', amount: 4 },
    ] 
  }
]

@Injectable({
  providedIn: 'root'
})
export class PickRequestService {

  constructor() { }

  getRequests(): Observable<Array<PickRequest>> {
    return of(MOCK_REQUESTS);
  }

  getRequest(id: string): Observable<PickRequest> {
    return of(MOCK_REQUESTS[0]);
  }
}
