import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifiedPageRoutingModule } from './verified-routing.module';

import { VerifiedPage } from './verified.page';
import { SelectIdTypeComponent } from './select-id-type/select-id-type.component';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';
import { PhotoRequirementComponent } from './photo-requirement/photo-requirement.component';
import { TakePhotoFrontComponent } from './take-photo-front/take-photo-front.component';
import { BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';
import { BaseSuccessModalModule } from 'src/app/base/base-success-modal/base-success-modal.component';
import { VerifiedSuccessComponent } from './verified-success/verified-success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifiedPageRoutingModule,
    BaseButtonrModule,
    BaseHeaderBackModule,
    BaseSuccessModalModule
  ],
  declarations: [VerifiedPage, SelectIdTypeComponent, PhotoRequirementComponent, TakePhotoFrontComponent, VerifiedSuccessComponent]
})
export class VerifiedPageModule {}
