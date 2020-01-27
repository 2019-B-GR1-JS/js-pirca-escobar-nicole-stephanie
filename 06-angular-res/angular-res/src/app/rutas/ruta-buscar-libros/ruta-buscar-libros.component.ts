import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LibrooRestService} from '../../services/libro-rest-services';


@Component({
  selector: 'app-ruta-buscar-libros',
  templateUrl: './ruta-buscar-libros.component.html',
  styleUrls: ['./ruta-buscar-libros.component.scss']
})
export class RutaBuscarLibrosComponent implements OnInit {
  libros = [];
  idUsuario: number;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _libroRestService: LibrooRestService,
  ) {
  }

  ngOnInit() { // ESTA LISTO EL COMPONENTE SE EJECUTA ESTE CODIGO
    this.escucharParametros();
  }

  escucharParametros() {
    const parametrosPapa$ = this._activatedRoute.parent.params;
    parametrosPapa$
      .subscribe(
        (parametros: { idUsuario: string }) => {
          console.log(parametros); // idUsuario
          this.idUsuario = +parametros.idUsuario;
          this.buscarLibrosPorIdUsuario(+parametros.idUsuario);
        }
      );
  }

  buscarLibrosPorIdUsuario(idUsuario: number) {
    const consulta = `idUsuario=${idUsuario}`;
    const libros$ = this._libroRestService
      .buscar(consulta);
    libros$
      .subscribe(
        (libros) => { // OK
          console.log(libros);
        },
        (error) => {  // ERROR
          console.error(error);
        }
      );
  }
}
