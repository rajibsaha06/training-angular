import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { combineLatest, forkJoin, Observable, of, Subscription } from 'rxjs';
import { Advice, AdviceSlip } from '../../models/home.interface';
import { HomeService } from '../../services/home.service';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-slider-two',
  templateUrl: './slider-two.component.html',
  styleUrls: ['./slider-two.component.scss'],
})
export class SliderTwoComponent implements OnInit, OnDestroy {
  @Output() clickEvent = new EventEmitter<boolean>();
  @Output() shareName = new EventEmitter<string>();
  name = 'natia';
  private subscription: Subscription = new Subscription();
  advices$: Observable<Advice>;
  advicesss$: Observable<any>;

  abc$: Observable<any> = of('asdasd');
  selectedCityCode: any;

  test: any;
  loader: boolean = false;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.shareName.emit(this.name);
    this.getAdvices();
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
    this.advices$ = this.homeService.getAdvices().pipe(
      // mergeMap((res) => {
      //   this.test = res;
      //   console.log(res);
      //   return this.homeService.getAdviceById(res?.slip?.id);
      // }),
      mergeMap((res) => this.homeService.getAdviceById(res?.slip?.id)),
      map((result) => result?.slip),
      catchError((err) => of(null))
    );
  }

  getAdvices() {
    this.loader = true;
    //this.advicesss$ = forkJoin([
    this.advicesss$ = combineLatest([
      this.homeService.getAdvices(),
      this.homeService.getAdviceById(125),
    ]).pipe(
      tap(() => (this.loader = false)),
      map((result) => {
        console.log(result);
        return result?.map((data) => data?.slip);
      }),
      catchError((err) => of(null))
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
