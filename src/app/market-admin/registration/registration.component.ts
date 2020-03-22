import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  router: Router;

  constructor(_router: Router) {
    this.router = _router; 
  }

  ngOnInit(): void {
  }

  goToRegistration(): void {
    this.router.navigate(['market-admin/identification']);
  }
}
