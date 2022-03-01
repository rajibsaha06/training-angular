import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let headers: HttpHeaders;
    headers = new HttpHeaders().set('userid', '1');
    // if (request.url.includes('advice')) {
    //   headers = new HttpHeaders().set('userid', '1');
    // } else {
    //   headers = this.addHeaders(request.headers);
    // }
    const reqHeaders = request.clone({
      headers: headers,
    });
    //const requestBody = request.body;
    return next.handle(reqHeaders);
  }

  private addHeaders(headers: HttpHeaders): HttpHeaders {
    const userId = '2';
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('userid', userId ? userId.toString() : '');
    return headers;
  }
}
