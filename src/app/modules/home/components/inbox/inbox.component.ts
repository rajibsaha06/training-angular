import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { InboxData } from '../../models/home.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  // providers: [HomeService],
})
export class InboxComponent implements OnInit, OnDestroy {
  @Input() inbox: InboxData[] = [];
  @ViewChildren('actionSign') actionSign;
  name: string;

  private subscription: Subscription = new Subscription();

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.dummySubject.next('vice-versa');
    this.homeService.dummyBehaviourSubject.next('behaviour-vice-versa');
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
          console.log('be--' + res);
        }
      })
    );
  }

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
