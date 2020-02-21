import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AutenticacionPageRoutingModule} from './autenticacion-routing.module';

import {AutenticacionPage} from './autenticacion.page';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AutenticacionPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AutenticacionPageRoutingModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AutenticacionPage]
})
export class AutenticacionPageModule {
}
