import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BaseInputModule } from 'src/app/base/base-input/base-input.component';
import { BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
    inputConfig = [
        {
            type: 'select-text',
            label: 'Phone number*',
            change: [
                {
                    id: 'phone',
                    type: 'text',
                    placeholder: '000 000 000',
                    validate: true,
                },
                {
                    id: 'Phone-area',
                    type: 'select',
                    validate: true,
                }
            ]
        }
    ];
    dataCountryCode = [
        {
            id: 1,
            fag: 'assets/svg/fag/usa.svg',
            code: '+1'
        },
        {
            id: 2,
            fag: '',
            code: '+84'
        },
        {
            id: 3,
            fag: '',
            code: '+44'
        }
    ]


    ForgotForm = new FormGroup({
        code: new FormControl(""),
        phone: new FormControl("")
    })
    constructor(
        private router: Router
    ) { }

    ngOnInit() { }
    onCallBack = (ev) => {
        this.router.navigateByUrl('/index/auth/verify/2')
    }
    onFormSubmit(): void {
        console.log(this.ForgotForm.value);
        this.router.navigateByUrl('/index/auth/verify/2')


    }
}
@NgModule({
    declarations: [ForgotComponent],
    imports: [
        CommonModule,
        IonicModule,
        BaseHeaderBackModule,
        BaseInputModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ForgotModule {

}