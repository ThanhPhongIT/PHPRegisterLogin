/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule ,  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { APIInterceptor } from './utils/interceptors/api.interceptor';
import { AuthInterceptor } from './utils/interceptors/auth.interceptor';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiCommonModule } from '@consult-indochina/common';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot({
            rippleEffect: false,
            mode: 'ios'
        }),
        AppRoutingModule,
        HttpClientModule,
        CiCommonModule.forRoot({
            S3_URL: 'https://li1jm77bc8.execute-api.ap-southeast-1.amazonaws.com/prod/presigned'
          }),

    ],
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      {
        provide:HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi:true,
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: APIInterceptor,
        multi: true,
      }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
