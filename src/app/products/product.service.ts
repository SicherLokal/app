import { Injectable } from '@angular/core';
import { Product } from './product';
import { MOCK_PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return MOCK_PRODUCTS;
  }

}
