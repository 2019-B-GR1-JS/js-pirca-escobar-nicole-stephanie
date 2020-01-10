import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
}) // esto es un servicio
export class UsuarioRestService {

  constructor(
    // se debe inyectar las depencias
    private readonly  _httpClient: HttpClient // Servicio -> http

  // public readonly httpClient: HttpClient // Servicio -> http
) {
  // inyectar la dependencia de algun lugar lo importante es el tipo de dato.
}
}
