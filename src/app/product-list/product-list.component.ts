import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../products/product.service';
import { CartService } from '../cart/cart.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  @Input() category: string;

  productList: Product[]
  cartService: CartService
  productService: ProductService

  constructor(_productService: ProductService, _cartService: CartService) {
    this.cartService = _cartService;
    this.productService = _productService;
  }

  ngOnInit(): void {
    this.productList = this.productService.getProducts(this.category);
  }

  addToCart(productId): void {
    this.cartService.addProduct(productId);
  }
}