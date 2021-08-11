import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEditPageRoutingModule } from './profile-edit-routing.module';

import { ProfileEditPage } from './profile-edit.page';
import { BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';
import { BaseInputModule } from 'src/app/base/base-input/base-input.component';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ProfileEditPageRoutingModule,
        BaseHeaderBackModule,
        BaseInputModule,
        BaseButtonrModule,
    ],
    declarations: [ProfileEditPage]
})
export class ProfileEditPageModule { }
