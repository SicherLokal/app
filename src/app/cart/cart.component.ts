import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../products/product.service';
import { CartItem } from './cart-item';
import { Product } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  router: Router;
  productService: ProductService;
  cartService: CartService;
  cart: CartItem[];
  productList: Product[];

  constructor(
    _router: Router, 
    _productService: ProductService, 
    _cartService: CartService) { 

    this.router = _router;
    this.productService = _productService;
    this.cartService = _cartService;
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  getProduct(productId: string): Product {
    return this.productService.getProduct(productId);
  }

  goToCheckout(): void {
    this.router.navigate(['/user-data'])
  }

  removeFromCart(cartItemId: string): void {
    this.cartService.removeCartItem(cartItemId);
    this.cart = this.cartService.getCart();
  }
}