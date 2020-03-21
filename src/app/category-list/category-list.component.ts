import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList: string[]

  constructor(productService: ProductService) {
    this.categoryList = productService.getProductCategories();
  }

  ngOnInit(): void {
  }
}