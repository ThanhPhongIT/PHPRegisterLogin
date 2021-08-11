import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentPageRoutingModule } from './appointment-routing.module';

import { AppointmentPage } from './appointment.page';
import { BaseInputModule } from 'src/app/base/base-input/base-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentPageRoutingModule,
    BaseInputModule,
  ],
  declarations: [AppointmentPage],
})
export class AppointmentPageModule {}
