import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAplicacionPage } from './menu-aplicacion.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAplicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAplicacionPageRoutingModule {}
