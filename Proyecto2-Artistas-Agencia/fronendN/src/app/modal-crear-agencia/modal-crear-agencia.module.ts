import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCrearAgenciaPageRoutingModule } from './modal-crear-agencia-routing.module';

import { ModalCrearAgenciaPage } from './modal-crear-agencia.page';
import {Routes} from '@angular/router';


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
    ModalCrearAgenciaPageRoutingModule
  ],
  declarations: [ModalCrearAgenciaPage]
})
export class ModalCrearAgenciaPageModule {}
