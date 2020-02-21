import {Injectable} from '@angular/core';

import {HttpSailsPrincipal} from './http-sails-principal.service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Agencia} from '../../modelo/agencia';

@Injectable({
    providedIn: 'root'
})
export class AgenciaHttpService extends HttpSailsPrincipal<Agencia> {

    constructor(private readonly _httpClient: HttpClient) {
        super(_httpClient, environment.url, '/Agencia');
    }
}
