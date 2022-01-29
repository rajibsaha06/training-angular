import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<boolean>();
  @Output() shareName = new EventEmitter<string>();
  name = 'natia';
  constructor() {}

  ngOnInit(): void {
    this.shareName.emit(this.name);
  }

  shareData() {
    this.clickEvent.emit(true);
  }
}
