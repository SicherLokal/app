import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order-service/order.service';
import { Order } from '../order-service/order';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  orders: Order[]
  router: Router;
  orderService: OrderService

  constructor(_router: Router, _orderService: OrderService) {
    this.router = _router; 
    this.orderService = _orderService;
  }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

  goToPicker(): void {
    this.router.navigate(['/pick/request/british_bird']);
  }
}
