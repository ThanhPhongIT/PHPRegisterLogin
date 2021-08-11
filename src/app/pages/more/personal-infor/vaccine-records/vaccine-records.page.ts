import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalService } from 'src/app/services/modal.service';
import { RecordDetailModalComponent } from './record-detail-modal/record-detail-modal.component';
import { FormRecordComponent } from './step-register/form-record/form-record.component';
import { StepRegisterPage } from './step-register/step-register.page';

@Component({
    selector: 'app-vaccine-records',
    templateUrl: './vaccine-records.page.html',
    styleUrls: ['./vaccine-records.page.scss'],
})
export class VaccineRecordsPage implements OnInit {
  dataRecord: any;
  constructor(
    private modalService: ModalService,
    private routerOutlet: IonRouterOutlet
  ) {}
  ngOnInit() {}
  openStep() {
    this.modalService
      .presentModal({
        presentingElement: this.routerOutlet.nativeEl,
        component: StepRegisterPage,
        mode: 'md',
        componentProps: {
          rootPage: FormRecordComponent,
          infor: {},
        },
      })
      .then(() => {
        this.dataRecord = {
          avatarURL: 'assets/svg/avt.png',
          name: 'Le Chi Trung',
          vaccineName: 'Pfizer-BioNTech COVID-19 Vaccine',
          provider: 'MDCareClik',
          startDate: '26/02/2021',
          endDate: '26/04/2021',
          status: 2,
        };
      });
  }
  openDetail(dataRC) {
    this.modalService.presentModal({
      component: RecordDetailModalComponent,
      componentProps: { data: dataRC },
    });
  }
}
