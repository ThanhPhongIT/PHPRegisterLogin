import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule, IonNav, ModalController, Platform } from '@ionic/angular';
import { CompleteComponent } from 'src/app/pages/more/personal-infor/vaccine-records/step-register/complete/complete.component';
import { FormRecordComponent } from 'src/app/pages/more/personal-infor/vaccine-records/step-register/form-record/form-record.component';
import { UploadPhotoComponent } from 'src/app/pages/more/personal-infor/vaccine-records/step-register/upload-photo/upload-photo.component';

@Component({
  selector: 'app-nav-step',
  templateUrl: './nav-step.component.html',
  styleUrls: ['./nav-step.component.scss'],
})
export class NavStepComponent {
  @Input() currentState: any;
  levelPage = {
    levelOne: FormRecordComponent,
    levelTwo: UploadPhotoComponent,
    levelThree: CompleteComponent,
  };
  constructor(
    private modalController: ModalController,
    private nav: IonNav,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(101, async () => {
      let canGoBack = await this.nav.canGoBack();
      if (canGoBack) {
        this.nav.pop();
      } else {
        await this.modalController.dismiss();
      }
      return;
    });
  }
}
@NgModule({
  declarations: [NavStepComponent],
  imports: [IonicModule,CommonModule],
  exports: [NavStepComponent],
})
export class NavStepModule {}
