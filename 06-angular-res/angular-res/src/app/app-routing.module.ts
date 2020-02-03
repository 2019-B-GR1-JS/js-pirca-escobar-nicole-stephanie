import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaUsuariosComponent} from "./rutas/ruta-usuarios/ruta-usuarios.component";
import {RutaGestionLibrosComponent} from "./rutas/ruta-gestion-libros/ruta-gestion-libros.component";
import {RutaBuscarLibrosComponent} from "./rutas/ruta-buscar-libros/ruta-buscar-libros.component";
import {RutaEditarLibrosComponent} from "./rutas/ruta-editar-libros/ruta-editar-libros.component";
import {RutaCrearLibrosComponent} from "./rutas/ruta-crear-libros/ruta-crear-libros.component";
import {EstarLogeadoPolicy} from "./services/politicas/estar-logeado-policy";


const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'inicio/usuarios',
    component: RutaUsuariosComponent
  },
  {
    path: 'inicio/gestion-usuarios',
    component: RutaGestionLibrosComponent,
    canActivate: [
      EstarLogeadoPolicy,
    ]
  },
  {
    path: 'inicio/usuarios/gestion-libros',
    component: RutaGestionLibrosComponent,
    children: [
      {
        path: 'buscar-libros',
        component: RutaBuscarLibrosComponent
      },
      {
        path: 'editar-libros',
        component: RutaEditarLibrosComponent
      },
      {
        path: 'crear-libros',
        component: RutaCrearLibrosComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
