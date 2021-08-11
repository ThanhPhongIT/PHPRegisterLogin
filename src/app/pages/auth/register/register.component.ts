import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';
import { BaseInputModule } from 'src/app/base/base-input/base-input.component';
import { BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
    },
    {
      id: 'email',
      label: 'Email*',
      placeholder: 'Your Email',
      type: 'text',
      validate: true,
    },
    {
      id: 'firstName',
      label: 'First Name *',
      type: 'text',
      placeholder: 'Your first name',
      validate: true,
    },

    {
      id: 'lastname',
      label: 'Last name*',
      placeholder: 'Your last name ',
      type: 'text',
      validate: true,
    },

    {
      id: 'password',
      label: 'Password*',
      placeholder: 'Your password ',
      type: 'text',
      validate: true,
    },
    {
      id: 'confirmpassword ',
      label: 'Confirm password *',
      placeholder: 'Confirm your password ',
      type: 'text',
      validate: true,
    },

  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  onCallBack = (ev) => {
    this.router.navigateByUrl('/index/auth/verify/1')
  }
}
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    IonicModule,
    BaseHeaderBackModule,
    BaseButtonrModule,
    BaseInputModule,
    RouterModule
  ],
})
export class RegisterModule {

}