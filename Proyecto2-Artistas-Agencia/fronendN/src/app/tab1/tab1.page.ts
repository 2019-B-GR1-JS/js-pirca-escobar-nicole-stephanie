import {Component, OnInit} from '@angular/core';
import {ServicioAdquisicionCarritoService} from '../servicios/servicio-adquisicion-Carrito/servicio-adquisicion-carrito.service';
import {AdquisicionArtista} from '../modelo/adquisicion-artista';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private readonly servicioAdquisicion: ServicioAdquisicionCarritoService) {
    }

    listaAdquisiones: AdquisicionArtista [] = [];
    busqueda: string = '';
    flag: boolean = true;

    ngOnInit() {
        this.listaAdquisiones = this.servicioAdquisicion.obtnerAdquisiciones();
        console.log('lista De Adquisiciones',this.listaAdquisiones);
    }

    buscarPorProductor() {
        this.flag = false;
    }
    buscarPorManger() {
        this.flag = true;
    }
    buscarPorAdquisicion() {
        if (this.flag === true) {
            this.listaAdquisiones = this.servicioAdquisicion.buscarAdquisicion(this.busqueda);

        } else {
            this.listaAdquisiones = this.servicioAdquisicion.buscarFacturasPorProductor(this.busqueda);
        }
    }
}
