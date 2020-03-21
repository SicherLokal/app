import { Component } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  cartService: CartService

  constructor(_cartService: CartService) {
    this.cartService = _cartService;
  }

  getCartAmount(): any {
    var allProducts = this.cartService.getCart();

    var amount = 0;
    allProducts.forEach(p => amount += p.amount);

    return amount;
  }
}
