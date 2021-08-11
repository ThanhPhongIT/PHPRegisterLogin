import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';
import { BaseHeaderModule } from 'src/app/base/header/base-header/base-header.component';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() { }
    onCallBack = (ev) => {
        this.router.navigateByUrl('/index/auth/register')
    }
    onCallBackAgree = (ev) => {
        this.router.navigateByUrl('/index/auth/login')
    }
}
@NgModule({
    declarations: [TermsComponent],
    imports: [
        CommonModule,
        IonicModule,
        BaseHeaderModule,
        BaseButtonrModule
    ]
})
export class TermsModule {

}