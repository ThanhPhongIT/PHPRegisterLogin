import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() { }
    onCallBack = (ev) => {
        this.router.navigateByUrl('/auth/login');
    };
    // eslint-disable-next-line @typescript-eslint/member-ordering
    slideOpts = {
        initialSlide: 1,
        speed: 400
    };
}


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        BaseButtonrModule
    ],
    declarations: [WelcomeComponent]
})
export class WelcomeModule {}
