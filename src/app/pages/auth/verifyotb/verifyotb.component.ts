import { CommonModule } from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BaseButtonrModule } from 'src/app/base/base-button/base-button.component';
import { BaseHeaderBackComponent, BaseHeaderBackModule } from 'src/app/base/header/base-header-back/base-header-back.component';

@Component({
  selector: 'app-verifyotb',
  templateUrl: './verifyotb.component.html',
  styleUrls: ['./verifyotb.component.scss'],
})
export class VerifyotbComponent implements OnInit {
  checkRoute
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }
  otpCode = new FormGroup({
    otp1: new FormControl("", Validators.required),
    otp2: new FormControl("", Validators.required),
    otp3: new FormControl("", Validators.required),
    otp4: new FormControl("", Validators.required),
    otp5: new FormControl("", Validators.required),
    otp6: new FormControl("", Validators.required),
  });
  ngOnInit() {

    this.checkRoute = +this.activeRouter.snapshot.params.id
    console.log(this.checkRoute);


  }
  onCallBack = (ev) => {
    if (this.checkRoute === 1) {
      this.router.navigateByUrl('/index/auth/terms')
    } else {
      this.router.navigateByUrl('/index/auth/reset')
    }

  }
  otpController(event, next, prev) {
  }
}
@NgModule({
  declarations: [VerifyotbComponent],
  imports: [
    CommonModule,
    IonicModule,
    BaseHeaderBackModule,
    BaseButtonrModule,
    RouterModule
  ]
})
export class VerifyModule {

}