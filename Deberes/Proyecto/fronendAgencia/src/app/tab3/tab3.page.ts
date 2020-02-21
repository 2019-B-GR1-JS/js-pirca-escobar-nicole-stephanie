import {Component} from '@angular/core';
import {BaseDeDatosService} from '../servicios/datos/base-de-datos.service';
import {DatosProductorService} from '../servicios/servicios-productor/datos-productor.service';
import {ServicioCarritoService} from '../servicios/servicio-carrito/servicio-carrito.service';
import {Artista} from '../modelo/artista';
import {ItemAdqusicionCarrito} from '../modelo/item-adqusicion-carrito';
import {AdquisicionArtista} from '../modelo/adquisicion-artista';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    listaArtistas: Artista[] = [];
    carritoA: ItemAdqusicionCarrito[] = [];

    nombre = '';
    nombreArtista = '';
    direccion = '';
    telefono = '';
    correo = '';
    artista = '';

    total = 0;
    nombreProductor = '';
    nombreManager = '';
    identificacion = '';


    constructor(private readonly baseDeDatos: BaseDeDatosService,
                private readonly datosProductor: DatosProductorService,
                private readonly servicioCarrito: ServicioCarritoService,
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
        const itemCarritoArtista: ItemAdqusicionCarrito = {
            nombre: nombreInput,
            industria: industriaInput,
            valorMarca: valorMarcaInput,
            cantidad: 1,
            artista: nombreInput,
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
            function (item, index, array) {
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
                nombreArtista: this.nombreArtista,
                direccion: this.direccion,
                telefono: this.telefono,
                correo: this.correo,
                artista: this.artista,
            carrito: this.carritoA,
                totalValorMarca
        :
            this.total

        }
            ;
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