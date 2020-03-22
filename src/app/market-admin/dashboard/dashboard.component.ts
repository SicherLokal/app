import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  orders: string[]
  router: Router;

  constructor(_router: Router) {
    this.router = _router; 
  }

  ngOnInit(): void {
    this.orders = [];
    this.orders.push("test");
    this.orders.push("testsst");
    this.orders.push("testsst");
    this.orders.push("testsst");
  }

  goToPicker(): void {
    this.router.navigate(['/pick/request/british_bird']);
  }
}
