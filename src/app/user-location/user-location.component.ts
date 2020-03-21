import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})
export class UserLocationComponent implements OnInit {
  router: Router;

  constructor(_router: Router) {
    this.router = _router;
  }

  ngOnInit(): void {
  }

  goToProductList(): void {
    this.router.navigate(['/product-list'])
  }

}
