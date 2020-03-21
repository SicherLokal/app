import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTileComponent } from './market-tile.component';

describe('MarketTileComponent', () => {
  let component: MarketTileComponent;
  let fixture: ComponentFixture<MarketTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
