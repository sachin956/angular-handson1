import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards:number[]=[1,2,3,4];

  constructor() { }

  ngOnInit(): void {
  }

  addCard() {
    this.cards.push(this.cards.length+1);
  }

}
