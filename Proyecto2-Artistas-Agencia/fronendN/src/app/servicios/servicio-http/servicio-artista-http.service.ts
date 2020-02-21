import { Injectable } from '@angular/core';
import {HttpSailsPrincipalService} from './http-sails-principal.service';
import {Artista} from '../../modelo/artista';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioArtistaHttpService extends HttpSailsPrincipalService<Artista>{

  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/Artista');
  }
}
