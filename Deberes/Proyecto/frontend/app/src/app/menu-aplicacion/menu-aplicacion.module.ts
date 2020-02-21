import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuAplicacionPage } from './menu-aplicacion.page';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: MenuAplicacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuAplicacionPage]
})
export class MenuAplicacionPageModule {}
