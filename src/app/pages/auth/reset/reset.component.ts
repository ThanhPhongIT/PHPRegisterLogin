import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BaseInputModule } from 'src/app/base/base-input/base-input.component';
import { BaseSuccessModalComponent, BaseSuccessModalModule } from 'src/app/base/base-success-modal/base-success-modal.component';
import { BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
    inputConfig = [
        {
            id: 'password',
            type: 'text',
            label: 'New password',
            placeholder: 'New password',
            validate: true,
        },
        {
            id: 'confirmpassword',
            type: 'text',
            label: 'Confirm new password',
            placeholder: 'Confirm new password',
            validate: true,
        }
    ];
    info = "Your password has been changed successfully"
    button = "Back to Log in"
    constructor(
        private router: Router,
        private modalService: ModalService,
    ) { }

    ngOnInit() { }

    onCallBack = (ev) => {
        let a = this.modalService.presentModal({
            component: BaseSuccessModalComponent,
            componentProps: {
                info: "Your password has been changed successfully",
                textButton: "Back to Log in",
                a: this.theBoundCallback(),
            },
        })
    }
    theBoundCallback() {
        this.router.navigateByUrl('/index/auth/login')
    }
}
@NgModule({
    declarations: [ResetComponent],
    imports: [
        CommonModule,
        IonicModule,
        BaseHeaderBackModule,
        BaseInputModule,
        RouterModule,
        BaseSuccessModalModule
    ]
})
export class ResetModule {
}