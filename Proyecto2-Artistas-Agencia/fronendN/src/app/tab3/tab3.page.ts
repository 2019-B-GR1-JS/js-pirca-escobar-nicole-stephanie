import {Component, OnInit} from '@angular/core';
import {Artista} from '../modelo/artista';
import {ItemAdquisicionCarrito} from '../modelo/item-adquisicion-carrito';
import {DatosAService} from '../servicios/datos/datos-a.service';
import {ServiciosProductorService} from '../servicios/servicios-productor/servicios-productor.service';
import {ServicioAdquisicionCarritoService} from '../servicios/servicio-adquisicion-Carrito/servicio-adquisicion-carrito.service';
import {AlertController} from '@ionic/angular';
import {AdquisicionArtista} from '../modelo/adquisicion-artista';


@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
    listaArtistas: Artista[] = [];
    carritoA: ItemAdquisicionCarrito[] = [];

    nombre = '';
    nombreArtista = '';
    direccion = '';
    telefono = '';
    correo = '';

    total = 0;
    nombreProductor = '';
    nombreManager = '';



    constructor(private readonly baseDeDatos: DatosAService,
                private readonly datosProductor: ServiciosProductorService,
                private readonly servicioCarrito: ServicioAdquisicionCarritoService,
                public alertController: AlertController
    ) {
    }


    ngOnInit() {
        this.nombreProductor = this.datosProductor.obtenerNombreProductor();
        this.listaArtistas = this.baseDeDatos.obtenerTodosLosArtistas();
    }

    refreshArtistas() {
        this.listaArtistas = this.baseDeDatos.obtenerTodosLosArtistas();
    }

    agregarArtistas(nombre: string, industria: string, valorMarca: number, id: number) {
        const index = this.buscarEnCarritoA(id);
        if (index === -1) {
            this.agregarNuevoItem(nombre, industria, valorMarca, id);
        } else {
            this.sumarUnoAlItem(index, valorMarca);
        }

    }

    sumarUnoAlItem(index: number, valorMarca: number) {
        let itemCarritoA = this.carritoA[index];
        itemCarritoA.cantidad += 1;
        itemCarritoA.valorMarcaTotal += valorMarca;
        itemCarritoA.valorMarcaTotal = parseFloat(itemCarritoA.valorMarcaTotal.toFixed(2));
        this.carritoA[index] = itemCarritoA;
        this.total += valorMarca;
        this.total = parseFloat(this.total.toFixed(2));
    }

    agregarNuevoItem(nombreInput: string, industriaInput: string, valorMarcaInput: number, idInput: number) {
        const itemCarritoArtista: ItemAdquisicionCarrito = {
            nombre: nombreInput,
            industria: industriaInput,
            valorMarca: valorMarcaInput,
            cantidad: 1,
            valorMarcaTotal: valorMarcaInput,
            id: idInput
        };
        this.carritoA.push(itemCarritoArtista);
        this.total = this.total + valorMarcaInput;
        this.total = parseFloat(this.total.toFixed(2));
    }

    buscarEnCarritoA(id: number): number {
        let indice = -1;
        this.carritoA.forEach(
            function(item, index, array) {
                if (item.id === id) {
                    indice = index;
                }
            }
        );
        return indice;
    }

    eliminarArtista(id: number, valorMarca: number) {
        const index = this.buscarEnCarritoA(id);
        if (index !== -1) {
            this.restarUnoAlItem(index, valorMarca);
        }
    }

    restarUnoAlItem(index: number, valorMarca: number) {
        let itemCarritoA = this.carritoA[index];
        itemCarritoA.cantidad -= 1;
        itemCarritoA.valorMarcaTotal -= valorMarca;
        itemCarritoA.valorMarcaTotal = parseFloat(itemCarritoA.valorMarcaTotal.toFixed(2));
        this.carritoA[index] = itemCarritoA;
        this.total -= valorMarca;
        this.total = parseFloat(this.total.toFixed(2));
        if (itemCarritoA.cantidad === 0) {
            this.carritoA.splice(index, 1);
        }
    }

    finalizarCompra() {
        if (this.total > 0) {
            const itemAdquision: AdquisicionArtista = {
                nombreManager: this.nombreManager,
                nombreProductor: this.nombreProductor,
                nombreArtita: this.nombreArtista,
                direccion: this.direccion,
                telefono: this.telefono,
                correo: this.correo,
                carrito: this.carritoA,
                totalValorMarca: this.total

            };
            this.servicioCarrito.agregarAdquisicion(itemAdquision);
            this.total = 0;
            this.carritoA = [];
            this.presentAlertCorrecto();
        } else {
            this.presentAlertIncorrecto();
        }

    }

    async presentAlertCorrecto() {
        const alert = await this.alertController.create({
            header: 'Adquisicion Satisfactoria',
            message: 'El Ingreso de un artista a la agencia ha sido realizada con éxito',
            buttons: ['OK']
        });

        await alert.present();
    }

    async presentAlertIncorrecto() {
        const alert = await this.alertController.create({
            header: 'Adquisicion incorrecta',
            message: ' El Ingreso de un artista a la agencia  No puede realizar  sin artistas',
            buttons: ['OK']
        });

        await alert.present();
    }
}
