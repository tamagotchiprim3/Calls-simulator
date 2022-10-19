import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LOGIN_TOKEN, PASSWORD_TOKEN } from '../constants/local-storage.const';
import { AUTH_PATH } from '../constants/routing-path.const';

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
    if (
      localStorage.getItem(LOGIN_TOKEN) === 'Yuriy' &&
      localStorage.getItem(PASSWORD_TOKEN) === '12345678'
    ) {
      return true;
    } else {
      this.router.navigate([AUTH_PATH.path]);
      return false;
    }
  }
}
