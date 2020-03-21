import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSlotComponent } from './user-slot.component';

describe('UserSlotComponent', () => {
  let component: UserSlotComponent;
  let fixture: ComponentFixture<UserSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
