import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-slot',
  templateUrl: './user-slot.component.html',
  styleUrls: ['./user-slot.component.scss']
})
export class UserSlotComponent implements OnInit {

  loaded: boolean

  constructor() {
    var that = this;
    that.loaded = false;
    
    window.setTimeout(function() {
      that.loaded = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

}
