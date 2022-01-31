import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

import { LoadingSpinnerService } from './../services/spinner.service';

@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor{

  constructor(private spinnerServ: LoadingSpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerServ.show();
    return next.handle(req).pipe(
      finalize (() => this.spinnerServ.hide())
    );
  }
}
