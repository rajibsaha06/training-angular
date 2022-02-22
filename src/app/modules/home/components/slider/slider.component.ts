import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  // providers: [HomeService],
})
export class SliderComponent implements OnInit, OnDestroy {
  @Output() clickEvent = new EventEmitter<boolean>();
  @Output() shareName = new EventEmitter<string>();
  name = 'natia';
  private subscription: Subscription = new Subscription();
  advices: any;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.shareName.emit(this.name);
    this.getAdvice();
    this.subscription.add(
      this.homeService.dummySubject$.subscribe((res) => {
        if (res) {
          console.log(res);
        }
      })
    );
    this.subscription.add(
      this.homeService.dummyBehaviourSubject$.subscribe((res) => {
        if (res) {
          console.log('be2--' + res);
        }
      })
    );
  }

  shareData() {
    this.clickEvent.emit(true);
    this.homeService.dummySubject.next(this.name);
    this.homeService.dummyBehaviourSubject.next('behaviour-' + this.name);
  }

  getAdvice() {
    this.subscription.add(
      this.homeService.getAdvices().subscribe(
        (res) => {
          this.advices = res;
          this.homeService.shareAdvice = res;
        },
        (err) => {}
      )
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
