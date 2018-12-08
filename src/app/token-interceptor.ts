import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    request = request.clone({
      setHeaders: {
        'Authorization': ""+localStorage.getItem("TOKEN")
      },
      withCredentials: true,
    });
    // console.log(request);
    return next.handle(request);
  }
}