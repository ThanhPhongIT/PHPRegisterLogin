import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://guam.mdcareclik.net/login';
@Injectable({
        providedIn: 'root',
})
export default class ApiService {
    constructor(private http: HttpClient){}

    login(): Observable<any> {
        const body =`email=tu.lt@consultindochina.com&password=12345678&_token=rSNLbmm5H0yUJxgljY7KcUG1NkuotPDiloWEKUBT`;
        return this.http.post(`login`,body,{
            headers: new HttpHeaders ({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'Content-Type' : 'application/x-www-form-urlenconded'
            })
        })
        .pipe(map(res => res));
    };
}
