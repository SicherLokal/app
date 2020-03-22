import { Injectable } from '@angular/core';
import { Order } from './order';
import { MOCK_ORDERS } from './mock-orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }  
  
  getOrders(): Order[] {
    return MOCK_ORDERS;
  }
}
