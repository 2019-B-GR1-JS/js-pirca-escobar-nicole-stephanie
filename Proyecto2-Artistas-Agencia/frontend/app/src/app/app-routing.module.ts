import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ExisteProductorService} from './servicios/guards/existe-productor.service';

const routes: Routes = [
        {
            path: '',
            loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
            canActivate: [
                ExisteProductorService
            ],
        },
        {
            path: 'modal-crear-agencia',
            loadChildren: './modal-crear-agencia/modal-crear-agencia.module#ModalCrearAgenciaPage',
            canActivate: [
                ExisteProductorService
            ],
        },
        {
            path: 'menu-aplicacion',
            loadChildren: './menu-aplicacion/menu-aplicacion.module#MenuAplicacionPageModule',
            canActivate: [
                ExisteProductorService
            ],
        },
        {
            path: 'modal-crear-artista',
            loadChildren: './modal-crear-artista/modal-crear-artista.module',
            canActivate: [
                ExisteProductorService
            ],
        },
        {
            path: 'autenticacion',
            loadChildren: './autenticacion/autenticacion.module#AutenticacionPageModule'
        },


        /*{
            path: 'modal-crear-agencia',
                loadChildren
        :
            () => import('./modal-crear-agencia/modal-crear-agencia.module').then(m => m.ModalCrearAgenciaPageModule)
        }*/
    ]
;

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}