import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   homeTitle = "welcome to the Ninja directory...";
   
  constructor() { }

  ngOnInit() {
  }

}