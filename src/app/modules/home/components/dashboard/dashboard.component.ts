import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  show: boolean = true;
  students = [
    {
      name: 'Natia',
      group: 'A',
    },
    {
      name: 'Sophie',
      group: 'B',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showDiv() {
    this.show = false;
  }
}
