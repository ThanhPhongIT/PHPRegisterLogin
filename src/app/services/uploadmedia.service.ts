/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class UploadMediaService {
    constructor(private http: HttpClient) {}
    uploadMedia(mediaUrl, mediaType, mediaId?): Observable<any> {
        return this.http
            .post("api/upload", {
                MediaURL: mediaUrl,
                MediaType: mediaType,
                MediaIDToReplace: mediaId,
            })
            .pipe(map((res) => res));
    }
}
