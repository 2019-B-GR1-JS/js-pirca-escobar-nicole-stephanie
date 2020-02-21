import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpSailsPrincipalService<ClaseEntidad> {
    protected url: string = "http://localhost:1337";
    protected modelo: string = "";


    constructor(protected readonly httpClient: HttpClient,
                url: string,
                modelo: string,
    ) {
        this.url = url;
        this.modelo = modelo;
    }

    crear(nuevoRegistro: ClaseEntidad): Observable<ClaseEntidad> {
        const url = `${this.url}${this.modelo}`;
        return this.httpClient
            .post(url, nuevoRegistro)
            .pipe(
                map(
                    (datos) => {
                        return datos as ClaseEntidad;
                    })
            );
    }

    eliminar(id: number): Observable<ClaseEntidad> {
        const url = `${this.url}${this.modelo}${'/'}${id}`;
        return this.httpClient
            .delete(url)
            .pipe(
                map(
                    (datos) => {
                        return datos as ClaseEntidad;
                    })
            );
    }

    obtenerTodos(): Observable<ClaseEntidad[]> {
        const url = `${this.url}${this.modelo}`;
        return this.httpClient
            .get(url)
            .pipe(
                map(
                    (datos) => {
                        return datos as ClaseEntidad[];
                    })
            );
    }
}
