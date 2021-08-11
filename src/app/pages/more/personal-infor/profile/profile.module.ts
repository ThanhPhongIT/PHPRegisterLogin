import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';
import { BaseInputModule } from 'src/app/base/base-input/base-input.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        BaseHeaderBackModule,
        BaseInputModule
    ],
    declarations: [ProfilePage]
})
export class ProfilePageModule { }
