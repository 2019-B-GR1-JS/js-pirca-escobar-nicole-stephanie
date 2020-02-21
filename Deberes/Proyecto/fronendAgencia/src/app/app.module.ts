import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModalCrearArtistaPage} from './modal-crear-artista/modal-crear-artista.page';
import {ModalCrearAgenciaPage} from './modal-crear-agencia/modal-crear-agencia.page';
import {HttpClientModule} from '@angular/common/http';
import {ModalCrearAgenciaPageModule} from './modal-crear-agencia/modal-crear-agencia.module';
import {ModalCrearArtistaPageModule} from './modal-crear-artista/modal-crear-artista.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [ ModalCrearAgenciaPage, ModalCrearArtistaPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ModalCrearAgenciaPageModule,
    ModalCrearArtistaPageModule,
    HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

