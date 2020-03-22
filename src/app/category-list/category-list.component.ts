import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList: string[];
  cartService: CartService;
  router: Router;
  filterKey: string;

  constructor(productService: ProductService, _cartService: CartService, _router: Router) {
    this.categoryList = productService.getProductCategories();
    this.cartService = _cartService;
    this.router = _router;
  }

  ngOnInit(): void {
  }

  getCartAmount(): any {
    var allProducts = this.cartService.getCart();

    var amount = 0;
    allProducts.forEach(p => amount += p.amount);

    return amount;
  }

  goToCart(): void {
    this.router.navigate(['/cart'])
  }
  
  goToCheckout(): void {
    this.router.navigate(['/user-data'])
  }

  toggleOverlay(){
    let overlay = document.getElementById("cart-overlay");
    if(overlay.style.display == "none"){
      overlay.style.display = "block";
    }
    else {
      overlay.style.display = "none";
    }
  }

}