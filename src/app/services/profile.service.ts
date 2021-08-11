/* eslint-disable @typescript-eslint/quotes */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
const email = "tu.lt@consultindochina.com";
@Injectable({
    providedIn: "root",
})
export class ProfileService {
    constructor(private http: HttpClient) {}

    getInfoProfile() {
        return this.http.get(`api/getInfoProfile`).pipe(map((res: any) => res));
    }
    editInfoProfile(param) {
        return this.http.put(`api/patient`, param);
    }
}
