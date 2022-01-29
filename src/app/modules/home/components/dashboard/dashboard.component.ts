import { Component, OnInit } from '@angular/core';
import { InboxData } from '../../models/home.interface';

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
  inboxData: InboxData[];

  constructor() {}

  ngOnInit(): void {
    // this.inboxData = [
    //   {
    //     vin: 2334234,
    //     year: 2021,
    //     brand: 'BMW',
    //     color: 'red',
    //   },
    //   {
    //     vin: 54645645,
    //     year: 2016,
    //     brand: 'Audi',
    //     color: 'black',
    //   },
    // ];
  }

  showDiv() {
    this.show = false;
  }

  getDataFromChild(event: boolean) {
    if (event) {
      this.inboxData = [
        {
          vin: 2334234,
          year: 2021,
          brand: 'BMW',
          color: 'red',
        },
        {
          vin: 54645645,
          year: 2016,
          brand: 'Audi',
          color: 'black',
        },
      ];
    }
  }

  getSampleDataFromChild(event: string) {
    console.log(event);
  }
}
