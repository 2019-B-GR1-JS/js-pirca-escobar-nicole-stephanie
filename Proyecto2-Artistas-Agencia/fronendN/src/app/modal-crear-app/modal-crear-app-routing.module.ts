import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCrearAppPage } from './modal-crear-app.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCrearAppPageRoutingModule {}
