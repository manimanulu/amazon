import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  n:number=100;
  name:string="mani";
  constructor() { }

  ngOnInit(): void {
  }

}
