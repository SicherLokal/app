import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Market } from './market';
import { map } from 'rxjs/operators';

const MOCK_MARKETS: Array<Market> = [
  { id: '1', name: 'Denn\'s Biomarkt', open: '8:00 - 21:00', distance: '300 m', postalcode: '10243'  },
  { id: '2', name: 'Paul\'s Getränkemarkt', open: '9:00 - 20:00', distance: '700 m', postalcode: '10243'  },
  { id: '3', name: 'Matthias Bäckerei', open: '6:00 - 14:00', distance: '1,3 km', postalcode: '10244'  },
  { id: '4', name: 'Fernando\'s Markt für international Spezialitäten', distance: '2 km', open: '10:00 - 16:00', postalcode: '10244'  },
  { id: '5', name: 'Armin\'s Biomarkt', open: '8:00 - 21:30', distance: '1,4 m', postalcode: '10244'  }
];

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor() {}

  public findMarkets(postalcode: string): Observable<Array<Market>> {
    return of(MOCK_MARKETS).pipe(
      map((markets) => markets.filter((m) => m.postalcode.startsWith(postalcode)))
    );
  }
}
