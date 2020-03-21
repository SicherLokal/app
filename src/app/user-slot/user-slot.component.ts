import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-slot',
  templateUrl: './user-slot.component.html',
  styleUrls: ['./user-slot.component.scss']
})
export class UserSlotComponent implements OnInit {

  loaded: boolean

  constructor() {
    this.loaded = true;
  }

  ngOnInit(): void {
  }

}
