import { HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: any, next: any) {

      console.log("Chegou aqui no começo")
        const token = sessionStorage.getItem('token');

        if (!token) {
            return next.handle(req);
        }

        const reqComAuth = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });

      console.log("Chegou aqui no final")
      return next.handle(reqComAuth);
    }

}
