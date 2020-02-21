import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCrearAgenciaPage } from './modal-crear-agencia.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearAgenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCrearAgenciaPageRoutingModule {}
