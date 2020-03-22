import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {
  router: Router;

  constructor(_router: Router) {
    this.router = _router; 
  }

  ngOnInit(): void {
  }

  goToProducts(): void {
    this.router.navigate(['market-admin/dashboard']);
  }
}
