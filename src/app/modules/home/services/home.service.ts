import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class HomeService {
  shareAdvice: any;
  constructor(private http: HttpClient) {}

  getAdvices(): Observable<any> {
    return this.http.get<any>(`${environment.apiPath2}advice`);
  }
}
