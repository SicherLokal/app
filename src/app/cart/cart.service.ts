import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: CartItem[];

  constructor() { 
    this.cart = [];
  }

  findProduct(productId: string) {
    if (this.cart.length > 0) {
      return this.cart.find(ci => ci.productId == productId);
    }

    return null;
  }

  addProduct(productId: string) {
    var foundProduct = this.findProduct(productId);
  
    if (!foundProduct) {
      foundProduct = new CartItem();
      foundProduct.id = 'CartItem' + new Date().getTime();
      foundProduct.productId = productId;
      foundProduct.amount = 1;
      
      this.cart.push(foundProduct);
    }
    else {
      foundProduct.amount++;
    }
  }

  removeProduct(productId: string) {
    var foundProduct = this.findProduct(productId);

    if (foundProduct) {
      foundProduct.amount--;
    }
  }

  getCart() {
    return this.cart;
  }

}