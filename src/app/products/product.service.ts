import { Injectable } from '@angular/core';
import { Product } from './product';
import { MOCK_PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor() { }

  getProducts(category?: string): Product[] {
    debugger;
    var productList = MOCK_PRODUCTS;

    if (category) {
      productList = productList.filter(p => p.category == category);
    }

    return productList;
  }

  getProduct(productId: string) {
    return this.getProducts().find(p => p.id == productId);
  }

  getProductCategories() {
    var categories = {};
    this.getProducts().forEach(p => categories[p.category] = 1);
    
    return Object.keys(categories);
  }
}