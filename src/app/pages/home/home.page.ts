import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BaseAlertComponent } from 'src/app/base/base-alert/base-alert.component';
import { BaseSuccessModalComponent } from 'src/app/base/base-success-modal/base-success-modal.component';
import { ProfileModel } from 'src/app/models/profile.models';
import { ModalService } from 'src/app/services/modal.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    dataCard = {
        imgLeft: 'assets/svg/home/icon-chart.svg',
        title: 'Health Chart',
        // eslint-disable-next-line max-len
        content: 'Track your COVID-19 testing, vaccination, medical exams and personal health with your Health Chart',
        buttonTitle: 'Verify chart',
        bgColor: '#58AECC'
    };
    profile$: Observable<ProfileModel>;
    constructor(
        private alertController: AlertController,
        private modalService: ModalService,
        private router: Router,
        private profieService: ProfileService,

    ) { }

    ngOnInit() {
      this.profile$ =  this.profieService.getInfoProfile();
    }
    routerToRecord() {
        this.router.navigate(['main/more/personal/vaccine-records']);
    }
    openAlert() {
        this.modalService.presentModal({
            component: BaseAlertComponent,
            cssClass: 'my-alert-custom',
            componentProps: {
                content: 'Are you sure that you want to logout?',
            }
        });
    }
    openSuccessModal() {
        this.modalService.presentModal({
            component: BaseSuccessModalComponent,
            cssClass: 'my-success-custom',
            componentProps: {
                info: 'The verification process has been completed. Thank you!',
                textButton: 'Back to profile',
            }
        });
    }

    routerTo() {

    }

}
