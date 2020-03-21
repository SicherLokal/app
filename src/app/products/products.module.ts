import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsModule {
  constructor(productService: ProductService) {
    productService.getProducts();
  }
 }
