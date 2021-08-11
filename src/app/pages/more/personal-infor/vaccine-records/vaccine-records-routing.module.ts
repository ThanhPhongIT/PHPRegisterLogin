import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccineRecordsPage } from './vaccine-records.page';

const routes: Routes = [
  {
    path: '',
    component: VaccineRecordsPage
  },  {
    path: 'step-register',
    loadChildren: () => import('./step-register/step-register.module').then( m => m.StepRegisterPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccineRecordsPageRoutingModule {}
