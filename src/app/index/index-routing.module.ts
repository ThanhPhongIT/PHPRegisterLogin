import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('../pages/auth/auth.module').then((m) => m.AuthPageModule),
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IndexPageRoutingModule {}
