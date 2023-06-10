import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    if (token) {
    request = request.clone({
    setHeaders: {
    Authorization: `Bearer ${token}`
    }
    });
    }
    return next.handle(request);
    }
}
