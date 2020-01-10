import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-rest1';
  url = 'http://localhost:1337';
  usuarios = [];

  // inyeccion de dependencias
  // DEPENDENCIAS -> SERVICIOS
  constructor(
    private readonly _httpClient: HttpClient
  ) {
    // CICLO DE VIDA DEL COMPONENTE EMPIEZA Y DESTRUYE
    // CASI NUNCA DEBE HABER CONFIGURACIONES
  }

  ngOnInit(): void {
    // const url = 'http://localhost:1337' / Usuario
    // $ -> observable
    const urlUsuarios = this.url + '/usuario';
    const usuarios$ = this._httpClient.get(
      urlUsuarios
    );
    usuarios$
      .subscribe((usuarios: any[]) => {
        this.usuarios = usuarios;
        console.log(usuarios);


      }, (error) => {
        console.error({
          error: error,
          mensaje: 'Error '
        })

      });

  }

  editar(usuario) {
    console.log('Editando Usuario');
  }
  eliminar (usuario) {
    console.log('Eliminando Uusraio')
  }
}
