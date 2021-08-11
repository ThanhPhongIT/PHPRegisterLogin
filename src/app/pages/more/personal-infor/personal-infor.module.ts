import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInforPageRoutingModule } from './personal-infor-routing.module';

import { PersonalInforPage } from './personal-infor.page';
import { BaseHeaderModule } from 'src/app/base/header/base-header/base-header.component';
import { BaseCardComponentModule } from 'src/app/base/base-card/base-card.component';
import { BaseCategoryComponentModule } from 'src/app/base/base-category/base-category.component';
import { CardBarModule } from 'src/app/base/card/card-bar/card-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PersonalInforPageRoutingModule,
        BaseHeaderModule,
        BaseCardComponentModule,
        BaseCategoryComponentModule,
        CardBarModule
    ],
    declarations: [PersonalInforPage]
})
export class PersonalInforPageModule { }
