
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class HotelInterceptor implements HttpInterceptor {
    private headers: HttpHeaders;
    constructor( ) {
        this.headers = new HttpHeaders();
   }
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
           this.headers = new HttpHeaders();
           this.headers = this.headers.set('Content-Type', 'application/json');
           this.headers = this.headers.set('Accept', 'application/json');
       const authReq = req.clone({headers: this.headers});
       return next.handle(authReq);
   }
}
