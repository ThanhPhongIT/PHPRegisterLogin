/* eslint-disable @typescript-eslint/naming-convention */
import {
    HttpErrorResponse,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/services/localstorege.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private allowed = ['/assets', '/api/token'];
    constructor(private storage: LocalStorageService, private router: Router) { }

    intercept(req: HttpRequest<unknown>, next: HttpHandler) {
        if (this.allowed.some((url) => req.url.includes(url))) {
            return next.handle(req);
        }
        const token = this.storage.get('access_token');
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token.token,
                },
            });
        }

        if (!token) {
            return next.handle(req);
        }

        return next.handle(req).pipe(
            tap(
                () => { },
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            // this.noti.showError(err.message);
                        } else {
                            // console.log(err);
                        }
                        // console.log(err);
                    }
                }
            )
        );
    }
}
