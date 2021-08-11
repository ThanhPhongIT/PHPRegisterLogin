/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ViewChild } from "@angular/core";
import { IonDatetime } from "@ionic/angular";
import { Router } from "@angular/router";
import { ProfileService } from "src/app/services/profile.service";
import { Observable } from "rxjs";
@Component({
    selector: "app-profile-edit",
    templateUrl: "./profile-edit.page.html",
    styleUrls: ["./profile-edit.page.scss"],
})
export class ProfileEditPage implements OnInit {
    @ViewChild(IonDatetime) datePicker: IonDatetime;
    profile$: Observable<any>;

    profileForm = new FormGroup({
        FirstName: new FormControl(""),
        LastName: new FormControl(""),
        Gender: new FormControl(""),
        DOB: new FormControl(""),
        Street: new FormControl(""),
        City: new FormControl(""),
    });

    constructor(
        private router: Router,
        private profileService: ProfileService
    ) {}

    ngOnInit() {
        this.profile$ = this.profileService.getInfoProfile();
    }
    openDateTime() {
        this.datePicker.open();
    }

    onSubmit() {
        console.log(this.profileForm.value);
        this.profileService.editInfoProfile(this.profileForm.value).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
        // this.router.navigate(['/main/more/personal/profile']);
    }
}
