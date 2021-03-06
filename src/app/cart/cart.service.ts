import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: CartItem[];

  constructor(private snackBar: MatSnackBar, private productService: ProductService) { 
    this.loadDataFromLocalStore();
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

    this.snackBar.open(this.productService.getProduct(productId).name + ' wurde zum Einkaufswagen hinzugefügt.', null, {
      duration: 2500,
      panelClass: "snackPanel"
    });

    this.saveDataToLocalStore();
  }

  removeProduct(productId: string) {
    var foundProduct = this.findProduct(productId);

    if (foundProduct) {
      foundProduct.amount--;
    }

    this.saveDataToLocalStore();
  }

  removeCartItem(cartItemId: string) {
    this.cart = this.cart.filter(c => c.id != cartItemId);

    this.saveDataToLocalStore();
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.saveDataToLocalStore();
  }



  loadDataFromLocalStore(): void {
    var loadedCart = localStorage.getItem("cart");

    if (loadedCart) {
      this.cart = JSON.parse(loadedCart);
    }
    else {
      this.cart = [];
    }
  }

  saveDataToLocalStore(): void {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
