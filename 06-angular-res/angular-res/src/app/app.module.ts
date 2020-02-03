import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsuarioRestService} from './services/usuario-rest.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {InputTextModule, TableModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {ModalEditarUsuarioComponent} from './modales/modal-editar-usuario/modal-editar-usuario.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaUsuariosComponent } from './rutas/ruta-usuarios/ruta-usuarios.component';
import { RutaGestionLibrosComponent } from './rutas/ruta-gestion-libros/ruta-gestion-libros.component';
import { RutaCrearLibrosComponent } from './rutas/ruta-crear-libros/ruta-crear-libros.component';
import { RutaBuscarLibrosComponent } from './rutas/ruta-buscar-libros/ruta-buscar-libros.component';
import { RutaEditarLibrosComponent } from './rutas/ruta-editar-libros/ruta-editar-libros.component';
import {LibrooRestService} from "./services/libro-rest-services";
import {AuthService} from "./services/auth/auth.service";
import {EstarLogeadoPolicy} from "./services/politicas/estar-logeado-policy";

@NgModule({
  declarations: [
    AppComponent,
    ModalEditarUsuarioComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaUsuariosComponent,
    RutaGestionLibrosComponent,
    RutaCrearLibrosComponent,
    RutaBuscarLibrosComponent,
    RutaEditarLibrosComponent
  ],
  entryComponents: [
    ModalEditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // -> Formularios
    HttpClientModule, // -> HTTP
    ButtonModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [
    UsuarioRestService,
    LibrooRestService,
    AuthService,
    EstarLogeadoPolicy,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
