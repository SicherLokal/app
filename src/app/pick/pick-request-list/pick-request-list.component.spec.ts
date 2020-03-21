import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickRequestListComponent } from './pick-request-list.component';

describe('PickRequestListComponent', () => {
  let component: PickRequestListComponent;
  let fixture: ComponentFixture<PickRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
