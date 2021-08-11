import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonRouterOutlet } from '@ionic/angular';

import { VaccineRecordsPageRoutingModule } from './vaccine-records-routing.module';

import { VaccineRecordsPage } from './vaccine-records.page';
import { BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';
import { BaseCardRecordModule } from 'src/app/base/base-card-record/base-card-record.component';
import { RecordDetailModalComponent } from './record-detail-modal/record-detail-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccineRecordsPageRoutingModule,
    BaseHeaderBackModule,
    BaseButtonrModule,
    BaseCardRecordModule
  ],
  declarations: [VaccineRecordsPage, RecordDetailModalComponent],
  providers: [IonRouterOutlet],
})
export class VaccineRecordsPageModule {}
