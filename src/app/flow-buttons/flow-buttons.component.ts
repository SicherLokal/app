import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flow-buttons',
  templateUrl: './flow-buttons.component.html',
  styleUrls: ['./flow-buttons.component.scss']
})
export class FlowButtonsComponent implements OnInit {
  @Input() forwardUrl: string;
  @Input() backwardUrl: string;
  router: Router;

  constructor(_router: Router) {
    this.router = _router; 
  }

  ngOnInit(): void {
  }

  goTo(url: string): void {
    this.router.navigate([url])
  }
}