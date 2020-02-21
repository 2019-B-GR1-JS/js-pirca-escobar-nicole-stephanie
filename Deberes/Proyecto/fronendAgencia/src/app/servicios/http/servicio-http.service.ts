import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

import {HttpSailsPrincipal} from './http-sails-principal.service';
import {AdquisicionArtista} from '../../modelo/adquisicion-artista';

@Injectable({
    providedIn: 'root'
})
export class ServicioHttpService extends HttpSailsPrincipal<AdquisicionArtista> {

    constructor(private readonly _httpClient: HttpClient) {
        super(_httpClient, environment.url, '/AdquisicionArtita');
    }
}
