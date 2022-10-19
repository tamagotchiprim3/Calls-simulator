import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { LOGIN_TOKEN, PASSWORD_TOKEN } from '../constants/local-storage.const';
import { AUTH_PATH } from '../constants/routing-path.const';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !(localStorage.getItem(LOGIN_TOKEN) === 'Yuriy') ||
      !(localStorage.getItem(PASSWORD_TOKEN) === '12345678')
    ) {
      this.router.navigate([AUTH_PATH.path]);
      localStorage.clear();
      return EMPTY;
    }
    return next.handle(req);
  }
}
