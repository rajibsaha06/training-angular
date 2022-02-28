import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AdviceSlip } from '../models/home.interface';

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

  getAdvices(): Observable<AdviceSlip> {
    return this.http.get<AdviceSlip>(`${environment.apiPath2}advice`);
  }

  getAdviceById(id: number): Observable<AdviceSlip> {
    return this.http.get<AdviceSlip>(`${environment.apiPath2}advice/${id}`);
  }
}
