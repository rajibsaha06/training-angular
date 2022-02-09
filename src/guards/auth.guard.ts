import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (route?.url[0].path === 'login') {
      if (this.getItem('token') && typeof this.getItem('token') === 'string') {
        this.router.navigate(['/contact']);
        return false;
      }
      return true;
    } else {
      if (!this.getItem('token') || typeof this.getItem('token') !== 'string') {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }

    return true;
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }
}
