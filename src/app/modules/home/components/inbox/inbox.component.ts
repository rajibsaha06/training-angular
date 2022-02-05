import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { InboxData } from '../../models/home.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  // providers: [HomeService],
})
export class InboxComponent implements OnInit {
  @Input() inbox: InboxData[] = [];
  @ViewChildren('actionSign') actionSign;
  name: string;

  constructor() {}

  ngOnInit(): void {}

  onClick(index: number) {
    // console.log(
    this.actionSign
      .toArray()
      [index].nativeElement.setAttribute('class', 'pi pi-times');
    // );
  }

  userDummyClass(name: string) {
    console.log(name);
  }
}
