import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MorePage } from './more.page';

const routes: Routes = [
  {
    path: '',
    component: MorePage,
    children: [
      {
        path: 'personal',
        loadChildren: ()=> import('./personal-infor/personal-infor.module').then((m)=> m.PersonalInforPageModule)
      },
      {
        path: '',
        redirectTo: 'personal',
        pathMatch: 'full'
    }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MorePageRoutingModule {}
