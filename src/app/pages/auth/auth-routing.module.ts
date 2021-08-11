import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from './auth.page';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { TermsComponent } from './terms/terms.component';
import { VerifyotbComponent } from './verifyotb/verifyotb.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'verify/:id',
        component: VerifyotbComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path: 'forgot',
        component: ForgotComponent
      },
      {
        path: 'reset',
        component: ResetComponent
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule { }
