import { Injectable } from '@angular/core';

import { ServicioHttpService } from '../http/servicio-http.service';
import {AdquisicionArtista} from '../../modelo/adquisicion-artista';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {

    totalArtistasNegociados: AdquisicionArtista [] = [];

    constructor(private readonly _servicioAdquisicionHttpService: ServicioHttpService) {
    }

    agregarAdquisicion(itemAdquisicion: AdquisicionArtista) {
        this.totalArtistasNegociados.push(itemAdquisicion);
        const adquisicionCrear$ = this._servicioAdquisicionHttpService.crear({
            nombreManager: itemAdquisicion.nombreManager,
            nombreProductor: itemAdquisicion.nombreProductor,
            nombreArtita: itemAdquisicion.nombreArtita,
            direccion: itemAdquisicion.direccion,
            telefono: itemAdquisicion.telefono,
            correo: itemAdquisicion.correo,
            totalValorMarca: itemAdquisicion.totalValorMarca
        });
        adquisicionCrear$.subscribe((adquisionCreada) => {
                console.log(adquisionCreada);
            },
            (error) => {
                console.log(error);
            }
        );
        this.guardarBase();
    }

    obtnerAdquisiciones(): AdquisicionArtista [] {
        var todasAdquisiones$ = this._servicioAdquisicionHttpService
            .obtenerTodos();
        todasAdquisiones$.subscribe(
            (adquisicionesObtenidas) => {
                this.totalArtistasNegociados = adquisicionesObtenidas;

            },
            (error) => {
                console.log(error);
            },
        );
        return this.totalArtistasNegociados;
    }

    guardarBase() {
        const data = {'listaAdquisiciones': this.totalArtistasNegociados}
        localStorage.setItem('dataAdquisicion', JSON.stringify(data));
    }

    buscarAdquisicion(nombre: string) {
        console.log(this.totalArtistasNegociados);
        var indices = [];
        this.totalArtistasNegociados.forEach(
            function (item, index, array) {
                if (item.nombreManager.includes(nombre)) {
                    indices.push(index);
                }
            }
        );

        var listaSearch = indices.map(i => this.totalArtistasNegociados[i]);
        return listaSearch;
    }

    buscarFacturasPorProductor(nombre: string) {
        var indices = [];
        this.totalArtistasNegociados.forEach(
            function (item, index, array) {
                if (item.nombreProductor.includes(nombre)) {
                    indices.push(index);
                }
            }
        );

        var listaSearch = indices.map(i => this.totalArtistasNegociados[i]);
        return listaSearch;
    }
}
