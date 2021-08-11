/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http : HttpClient) {

    }
    login(param) {
      return this.http.post(`api/login`,param);

    }


}
