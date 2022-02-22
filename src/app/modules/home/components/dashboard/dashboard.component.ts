import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { InboxData } from '../../models/home.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
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
  @ViewChild('inputText', { static: true }) inputText;
  @ViewChild('hello', { static: true }) hello;
  @ViewChild('inboxName', { static: true }) inboxName;

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
    this.inputText.nativeElement.value = 'abc';
    // console.log(this.inputText.nativeElement.value);

    // console.log(this.hello.nativeElement);
    this.hello.nativeElement.style.display = 'none';

    this.inboxName.name = 'Natia Sofie';
    this.inboxName.userDummyClass('Natia');
  }

  ngAfterViewInit(): void {}

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
    //console.log(event);
  }
}
