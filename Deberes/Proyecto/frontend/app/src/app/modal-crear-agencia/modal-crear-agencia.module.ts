import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalCrearAgenciaPage } from './modal-crear-agencia.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearAgenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalCrearAgenciaPage]
})
export class ModalCrearAgenciaPageModule {}
