import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
