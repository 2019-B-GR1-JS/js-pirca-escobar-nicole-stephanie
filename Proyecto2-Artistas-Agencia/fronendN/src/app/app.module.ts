import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModalCrearAgenciaPageModule} from './modal-crear-agencia/modal-crear-agencia.module';
import {HttpClientModule} from '@angular/common/http';
import {ModalCrearAppPageModule} from './modal-crear-app/modal-crear-app.module';
import {ModalCrearAgenciaPage} from './modal-crear-agencia/modal-crear-agencia.page';
import {ModalCrearAppPage} from './modal-crear-app/modal-crear-app.page';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [ModalCrearAgenciaPage, ModalCrearAppPage],
    imports: [BrowserModule, IonicModule.forRoot(),
        AppRoutingModule,
        ModalCrearAgenciaPageModule,
        ModalCrearAppPageModule,
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
