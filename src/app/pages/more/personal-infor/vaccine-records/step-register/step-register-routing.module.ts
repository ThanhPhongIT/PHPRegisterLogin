import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepRegisterPage } from './step-register.page';

const routes: Routes = [
  {
    path: '',
    component: StepRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepRegisterPageRoutingModule {}
