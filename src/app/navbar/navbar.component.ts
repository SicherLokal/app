import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showCart: Observable<boolean>;

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {
    this.showCart = this.router.events.pipe(
      filter((event) => event instanceof RouterEvent),
      map((event: RouterEvent) => event.url.startsWith('/product-list') || event.url.startsWith('/cart'))
    )
  }

  getCartAmount(): any {
    var allProducts = this.cartService.getCart();

    var amount = 0;
    allProducts.forEach(p => amount += p.amount);

    return amount;
  }

  toggleOverlay(){
    let overlay = document.getElementById("cart-overlay");

    if(overlay.style.display == "none" || !overlay.style.display){
      overlay.style.display = "block";
    }
    else {
      overlay.style.display = "none";
    }
  }

}
