import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accountservice = this.inject.get(LoginService);
    let jwtToken=req.clone({
      setHeaders:{
        Authorization: 'bearer '+ accountservice.GetToken()
      }
    });
    return next.handle(jwtToken);
  }
}
