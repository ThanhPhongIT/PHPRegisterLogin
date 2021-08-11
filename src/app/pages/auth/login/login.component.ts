/* eslint-disable @typescript-eslint/naming-convention */
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';
import { LoginModel } from 'src/app/models/auth.models';
import ApiService from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorege.service';

const error = 'Account password is not correct!';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    toast = '';

    loginForm = new FormGroup(
        {
            email: new FormControl(''),
            password: new FormControl('')
        }
    );
    constructor(
        private router: Router,
        private authService: AuthService,
        private loginService: ApiService,
        private local: LocalStorageService,
    ) { }

    onFormSubmit(): void {
        const param: LoginModel = {
            Email: this.loginForm.get('email').value,
            Password: this.loginForm.get('password').value,
        };
        this.authService.login(param).subscribe(
            (res) => {
                this.local.set('access_token',res);
                this.router.navigate(['home']);
                console.log(this.local.get('access_token'));
            },
            (err) => {
                console.log(err);
            });
    }
    ngOnInit() { }

}
@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        BaseButtonrModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
