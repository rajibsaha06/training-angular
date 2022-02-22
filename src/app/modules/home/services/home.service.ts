import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class HomeService {
  shareAdvice: any;
  dummySubject = new Subject<string>();
  dummySubject$ = this.dummySubject.asObservable();

  dummyBehaviourSubject = new BehaviorSubject<string>('dummy');
  dummyBehaviourSubject$ = this.dummyBehaviourSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAdvices(): Observable<any> {
    return this.http.get<any>(`${environment.apiPath2}advice`);
  }
}
