import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { Cities } from '../../models/contact.interface';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  cities: Cities[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  selectedCity: Cities;
  abc: boolean = true;
  name: string = 'Natia';
  dateValue: string = '02/14/2022';
  currencyValue: string = '200.34';
  paragraph: string =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    console.log(this.homeService.shareAdvice);
    this.selectedCity = { name: 'London', code: 'LDN' };
  }

  onChangeDropdown() {
    console.log(this.selectedCity);
  }
}
