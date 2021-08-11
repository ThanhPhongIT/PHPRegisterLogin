import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppGuard } from './utils/guards/app.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule),
        canActivate: [AppGuard]

    },
    {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainPageModule),
        canLoad:[AppGuard]


    },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
