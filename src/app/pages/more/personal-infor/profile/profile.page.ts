/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpBackend, HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { BaseUploadComponent, S3FileService } from "@consult-indochina/common";
import { BehaviorSubject, Observable } from "rxjs";
import { ProfileModel } from "src/app/models/profile.models";
import { PhotoService } from "src/app/services/photo.service";
import { ProfileService } from "src/app/services/profile.service";
import { UploadMediaService } from "src/app/services/uploadMedia.service";
import * as uuid from "uuid";
@Component({
    selector: "app-profile",
    // eslint-disable-next-line @typescript-eslint/quotes
    templateUrl: "./profile.page.html",
    styleUrls: ["./profile.page.scss"],
})
export class ProfilePage extends BaseUploadComponent implements OnInit {
    arrIMG = [];
    avt: string;
    profile$: Observable<ProfileModel>;
    private http: HttpClient;
    avatar = new BehaviorSubject<string>(null);
    mediaId: string;
    constructor(
        public s3Service: S3FileService,
        public photoService: PhotoService,
        private profileService: ProfileService,
        private handler: HttpBackend,
        private uploadMediaService: UploadMediaService
    ) {
        // eslint-disable-next-line @typescript-eslint/semi
        super(s3Service);
        this.http = new HttpClient(handler);
    }

    ngOnInit() {
        console.log(this.avatar);

        this.profile$ = this.profileService.getInfoProfile();
        this.profileService.getInfoProfile().subscribe((res) => {
            this.mediaId = res.MediaId;
            console.log(res);
        });
    }

    changePhoto() {
        this.photoService.editImg().then(async (path) => {
            // console.log(path);
            const blob: any = await fetch(path.webPath).then((r) => r.blob());
            blob.lastModifiedDate = new Date();
            //chuyen doi ma so dinh dang duy nhat
            blob.name = uuid.v4();
            this.multipleUpload([blob]).subscribe(
                () => {},
                (err) => {},
                () => {
                    // this.
                    this.avatar.next(this.fileLinkList[0]);
                    this.uploadMediaService
                        .uploadMedia(this.fileLinkList[0], 1, this.mediaId)
                        .subscribe((res) => {
                            console.log(res);
                        });
                }
            );
            console.log(blob);

            // this.http.get(path.webPath).subscribe((res: any) => console.log(res.blob()));
        });
    }
}
