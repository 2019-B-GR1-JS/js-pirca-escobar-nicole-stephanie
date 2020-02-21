import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalCrearArtistaPage } from './modal-crear-artista.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearArtistaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalCrearArtistaPage]
})
export class ModalCrearArtistaPageModule {}

