import { Component, Input, OnInit } from '@angular/core';
import { Advice } from '../../models/home.interface';

@Component({
  selector: 'app-slider-three',
  templateUrl: './slider-three.component.html',
  styleUrls: ['./slider-three.component.scss'],
})
export class SliderThreeComponent implements OnInit {
  @Input() advice: Advice;
  @Input() advicesss: any;

  constructor() {}

  ngOnInit(): void {}
}
