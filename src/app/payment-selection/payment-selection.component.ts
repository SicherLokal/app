import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.scss']
})
export class PaymentSelectionComponent implements OnInit {
  router: Router;

  constructor(_router: Router) {
    this.router = _router;
  }

  ngOnInit(): void {
  }

  pay(): void {
    this.router.navigate(['/user-slot'])
  }

}
