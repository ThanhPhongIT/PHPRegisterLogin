import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepRegisterPageRoutingModule } from './step-register-routing.module';

import { StepRegisterPage } from './step-register.page';
import { FormRecordComponent } from './form-record/form-record.component';
import { BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';
import { BaseHeaderModule } from 'src/app/base/header/base-header/base-header.component';
import { NavStepModule } from 'src/app/base/nav-step/nav-step.component';
import { BaseInputModule } from 'src/app/base/base-input/base-input.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepRegisterPageRoutingModule,
    BaseHeaderBackModule,
    BaseButtonrModule,
    BaseHeaderModule,
    NavStepModule,
    BaseInputModule
  ],
  declarations: [StepRegisterPage, FormRecordComponent, UploadPhotoComponent, CompleteComponent]
})
export class StepRegisterPageModule {}
