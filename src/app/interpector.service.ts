import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';



@Injectable({
  providedIn: 'root'
})
export class InterpectorService {

  constructor(private registrationService: ApiService) {
    console.log('message');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.registrationService.getToken();
    if (token) {
      console.log('mes')
    }
    return next.handle(req);
  }
  log(message: any) {

  }

}
