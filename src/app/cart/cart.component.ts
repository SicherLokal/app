import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  router: Router;

  constructor(_router: Router) { 
    this.router = _router;
  }

  ngOnInit(): void {
  }

  goToCheckout(): void {
    this.router.navigate(['/user-data'])
  }
}