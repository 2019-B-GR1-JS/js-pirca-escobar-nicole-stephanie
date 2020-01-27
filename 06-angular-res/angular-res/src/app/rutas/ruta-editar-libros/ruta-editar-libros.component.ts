import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-libros',
  templateUrl: './ruta-editar-libros.component.html',
  styleUrls: ['./ruta-editar-libros.component.scss']
})
export class RutaEditarLibrosComponent implements OnInit {
  parametrosEditar;
  parametrosPapa;
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() { // ESTA LISTO EL COMPONENTE SE EJECUTA ESTE CODIGO
    // this.escucharParametrosEdicion();
    this.escucharParametrosPapa();
  }

  escucharParametrosEdicion() {
    const parametros$ = this._activatedRoute.params;
    parametros$
      .subscribe(
        (parametros) => {
          this.parametrosEditar = parametros.idLibro;
          this.cargarUsuarioYLibro();
        }
      );
  }

  escucharParametrosPapa() {
    const parametros$ = this._activatedRoute.parent.params;
    parametros$
      .subscribe(
        (parametros) => {
          this.parametrosPapa = parametros.idUsuario;
          this.escucharParametrosEdicion();
        }
      );
  }

  cargarUsuarioYLibro(){
    // LLamar al servidor con los parametros del papa y del hijo
    console.log(this.parametrosPapa);
    console.log(this.parametrosEditar);
  }

}
