import { Component, Input, OnInit } from '@angular/core';
import { InboxData } from '../../models/home.interface';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  @Input() inbox: InboxData[] = [];

  constructor() {}

  ngOnInit(): void {}
}
