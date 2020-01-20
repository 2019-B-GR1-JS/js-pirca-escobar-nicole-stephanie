import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {
  url = environment.url + '/usuario';

  constructor(
    private readonly _httpClient: HttpClient,
  ) {

  }

  editar(id: number, datos) {
    const urlEditar = this.url + '/' + id;
    return this._httpClient.put(urlEditar, datos);
    // 'http://localhost:1337//usuario/ID'
  }
}
