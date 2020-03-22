import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartService: CartService

  constructor(_cartService: CartService) { 
    this.cartService = _cartService;
  }

  ngOnInit(): void {
  }

  getCartAmount(): any {
    var allProducts = this.cartService.getCart();

    var amount = 0;
    allProducts.forEach(p => amount += p.amount);

    return amount;
  }

}
