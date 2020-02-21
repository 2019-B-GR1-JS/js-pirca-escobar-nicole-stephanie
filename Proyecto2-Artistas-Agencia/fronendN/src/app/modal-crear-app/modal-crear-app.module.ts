import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCrearAppPageRoutingModule } from './modal-crear-app-routing.module';

import { ModalCrearAppPage } from './modal-crear-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCrearAppPageRoutingModule
  ],
  declarations: [ModalCrearAppPage]
})
export class ModalCrearAppPageModule {}
