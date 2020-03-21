import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { CartService } from '../cart/cart.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  productList: Product[]
  cartService: CartService

  constructor(productService: ProductService, _cartService: CartService) {
    this.cartService = _cartService;
    this.productList = productService.getProducts();
  }

  ngOnInit(): void {
    console.log('x1');
  }

  addToCart(productId): void {
    this.cartService.addProduct(productId);
  }

  getCartAmount(): any {
    var allProducts = this.cartService.getCart();

    var amount = 0;
    allProducts.forEach(p => amount += p.amount);

    return amount;
  }
}