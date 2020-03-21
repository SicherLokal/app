import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickRequestDetailComponent } from './pick-request-detail.component';

describe('PickRequestDetailComponent', () => {
  let component: PickRequestDetailComponent;
  let fixture: ComponentFixture<PickRequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickRequestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
