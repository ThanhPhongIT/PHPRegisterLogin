import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';
import { BaseHeaderModule } from 'src/app/base/header/base-header/base-header.component';
import { BaseCardComponentModule } from 'src/app/base/base-card/base-card.component';
import { BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        BaseButtonrModule,
        BaseHeaderModule,
        BaseCardComponentModule,
        BaseHeaderBackModule
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
