import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@core/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addToken(req);
    return next.handle(req);
  }

  private addToken(resquest: HttpRequest<any>){
    const token = this.tokenService.getToken();
    console.log('token', token);
    if (token){
      resquest = resquest.clone({
        setHeaders: {
          token,
        }
      });
      return resquest;
    }else{
      //logica para informar que no hay token
      return resquest;
    }
  }

}
