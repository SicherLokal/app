import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Market } from '../market';
import { MarketService } from '../market.service';
import { FormControl } from '@angular/forms';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-market-search',
  templateUrl: './market-search.component.html',
  styleUrls: ['./market-search.component.scss']
})
export class MarketSearchComponent implements OnInit {
  
  public markets: Observable<Array<Market>>;

  public searchCtrl: FormControl = new FormControl();

  constructor(private marketService: MarketService) {}

  ngOnInit(): void {
    this.markets = this.searchCtrl.valueChanges.pipe(
      filter((value: string) => value.length > 3),
      switchMap((code) => this.marketService.findMarkets(code))
    );
  }

  
}
