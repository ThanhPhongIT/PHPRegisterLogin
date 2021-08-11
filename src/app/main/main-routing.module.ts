import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
    {
        path: '',
        component: MainPage,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('../pages/home/home.module').then((m) => m.HomePageModule)
            },
            {
                path: 'appointment',
                loadChildren: () =>
                    import('../pages/appointment/appointment.module').then((m) => m.AppointmentPageModule)
            },
            {
                path: 'health',
                loadChildren: () =>
                    import('../pages/health/health.module').then((m) => m.HealthPageModule)
            },
            {
                path: 'more',
                loadChildren: () =>
                    import('../pages/more/more.module').then((m) => m.MorePageModule)
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }

        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainPageRoutingModule { }
