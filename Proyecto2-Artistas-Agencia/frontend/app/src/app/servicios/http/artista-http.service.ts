import {Injectable} from '@angular/core';

import {HttpSailsPrincipal} from './http-sails-principal.service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Artista} from '../../modelo/artista';

@Injectable({
    providedIn: 'root'
})
export class ArtistaHttpService extends HttpSailsPrincipal<Artista> {

    constructor(private readonly _httpClient: HttpClient) {
        super(_httpClient, environment.url, '/Artista');
    }

    obtenerAplicacionesPorID(): Observable<Artista[]> {
        const url = `${this.url}${this.modelo}`;
        return this.httpClient
            .get(url)
            .pipe(
                map(
                    (datos) => {
                        return datos as Artista[];
                    })
            );
    }
}