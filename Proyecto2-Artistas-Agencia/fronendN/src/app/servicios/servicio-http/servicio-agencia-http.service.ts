import { Injectable } from '@angular/core';
import {HttpSailsPrincipalService} from './http-sails-principal.service';
import {HttpClient} from '@angular/common/http';
import {Agencia} from '../../modelo/agencia';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioAgenciaHttpService  extends HttpSailsPrincipalService<Agencia> {

  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/Agencia');
  }
}
