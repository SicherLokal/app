import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-market-tile',
  templateUrl: './market-tile.component.html',
  styleUrls: ['./market-tile.component.scss']
})
export class MarketTileComponent implements OnInit {
  @Input() title: string;
  @Input() openedUntil: string;
  @Input() distance: string;

  constructor() { }

  ngOnInit(): void {
  }

}
