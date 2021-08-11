import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInforPage } from './personal-infor.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalInforPage
  },
  {
    path: 'vaccine-records',
    loadChildren: () => import('./vaccine-records/vaccine-records.module').then( m => m.VaccineRecordsPageModule)
  },
  {
    path: 'verified',
    loadChildren: () => import('./verified/verified.module').then( m => m.VerifiedPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInforPageRoutingModule {}
