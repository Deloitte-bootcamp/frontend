import { HttpEvent, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export function httpInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  console.log('Chegou aqui no começo');
  const token = sessionStorage.getItem('token');

  if (!token) {
    return next(req);
  }

  const reqComAuth = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log('Chegou aqui no final');
  return next(reqComAuth);
}
