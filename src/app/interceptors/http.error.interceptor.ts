import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
	// eslint-disable-next-line no-empty-function
	constructor(private router: Router) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((error: HttpErrorResponse) => {
				let errorMsg = '';
				if (error.error instanceof ErrorEvent) {
					errorMsg = `Error: ${error.error.message}`;
				} else if (error.status === HttpStatusCode.Unauthorized) {
					this.router.navigate(['/unauthorized']);
				} else {
					errorMsg = `ErrorCode: ${error.status}, Message: ${error.message}`;
				}
				return throwError(() => new Error(errorMsg));
			})
		);
	}
}
