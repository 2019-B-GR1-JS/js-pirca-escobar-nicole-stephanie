import { Injectable } from '@angular/core';

import {AdquisicionArtista} from '../../modelo/adquisicion-artista';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {HttpSailsPrincipalService} from './http-sails-principal.service';


@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService extends HttpSailsPrincipalService<AdquisicionArtista>{

  constructor(private readonly _httpClient: HttpClient) {
    super (_httpClient, environment.url, '/AdquisicionArtita');
  }
}
