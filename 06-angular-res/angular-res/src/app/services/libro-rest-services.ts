import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LibrooRestService {
  url = environment.url + '/usuario';

  constructor(
    private readonly _httpClient: HttpClient,
  ) {

  }

  editar(id: number, datos): Observable<any> {
    const urlEditar = this.url + '/' + id;
    return this._httpClient
      .put(
        urlEditar,
        datos
      );
  }

  buscar(busqueda: string): Observable<any> {
    let consulta = '';
    if (busqueda) {
      consulta = '?' + busqueda;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );
  }

  eliminar(id: number): Observable<any> {
    const urlBuscar = this.url + '/' + id;
    return this._httpClient
      .delete(
        urlBuscar
      );
  }


}
