import { TestBed } from '@angular/core/testing';

import { PickRequestService } from './pick-request.service';

describe('PickRequestService', () => {
  let service: PickRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
