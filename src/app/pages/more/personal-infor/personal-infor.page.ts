import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { Local } from 'protractor/built/driverProviders';
import { Observable } from 'rxjs';
import { BaseAlertComponent } from 'src/app/base/base-alert/base-alert.component';
import { ProfileModel } from 'src/app/models/profile.models';
import { LocalStorageService } from 'src/app/services/localstorege.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProfileService } from 'src/app/services/profile.service';
import { SelectIdTypeComponent } from './verified/select-id-type/select-id-type.component';
import { VerifiedPage } from './verified/verified.page';


@Component({
    selector: 'app-personal-infor',
    templateUrl: './personal-infor.page.html',
    styleUrls: ['./personal-infor.page.scss'],
})
export class PersonalInforPage implements OnInit {
    profile$: Observable<ProfileModel>;

    dataCard = {
        imgLeft: 'assets/icon/verifi.svg',
        title: 'Let\'s finish the ID verification',
        // eslint-disable-next-line max-len
        content: 'This helps us check that you\'re really you, Identity verification is one of the ways to keep the community safe and healthy.',
        buttonTitle: 'Verify now',
        bgColor: '#FBC150'
    };

    listCategory = [
        {
            iconLink: 'assets/svg/more/icon-profile.svg',
            title: 'Profile',
            link: 'profile'
        },
        {
            iconLink: 'assets/svg/more/icon-vaccine.svg',
            title: 'Vaccine Records',
            link: 'vaccine-records'
        },
        {
            iconLink: 'assets/svg/more/icon-devices.svg',
            title: 'Devices'
        },
        {
            iconLink: 'assets/svg/more/icon-help.svg',
            title: 'Help Center'
        },
        {
            iconLink: 'assets/svg/more/icon-setting.svg',
            title: 'Setting'
        },
        // {
        //     iconLink: 'assets/svg/more/icon-logout.svg',
        //     title: 'Log out'


        // },

    ];
    logout =
        {
            iconLink: 'assets/svg/more/icon-logout.svg',
            title: 'Log out'
        };
    constructor(
        private profileService: ProfileService,
        private modalService: ModalService,
        private routerOutlet: IonRouterOutlet,
        private local: LocalStorageService ) { }

    ngOnInit() {
        this.profile$ = this.profileService.getInfoProfile();
    }

    openVerifiedPage() {
        this.modalService.presentModal({
            presentingElement: this.routerOutlet.nativeEl,
            component: VerifiedPage,
            mode: 'md',
            componentProps: {
                rootPage: SelectIdTypeComponent,
                infor: {}
            },
        });
    }
    btnSubmit() {
        this.modalService.presentModal({
            presentingElement: this.routerOutlet.nativeEl,
            component: BaseAlertComponent,
            cssClass: 'logout-modal',
            // cssClass:'my-custom-class',
            mode: 'md',
            componentProps: {
                rootPage: SelectIdTypeComponent,
                content: ' Are you sure that you want to logout?'
            },
        });

    }

}
