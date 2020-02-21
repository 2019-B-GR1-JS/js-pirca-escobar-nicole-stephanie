import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artista} from '../modelo/artista';
import {BaseDeDatosService} from '../servicios/datos/base-de-datos.service';
import {ModalController} from '@ionic/angular';
import {ModalCrearArtistaPage} from '../modal-crear-artista/modal-crear-artista.page';


@Component({
    selector: 'app-menu-aplicacion',
    templateUrl: './menu-aplicacion.page.html',
    styleUrls: ['./menu-aplicacion.page.scss'],
})
export class MenuAplicacionPage implements OnInit {

    agencia: string = '';
    idAgencia: number;
    listaArtistas: Artista[] = [];
    busqueda: string = '';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private readonly baseDeDatos: BaseDeDatosService,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
        this.agencia = this.route.snapshot.paramMap.get('nombre');
        this.idAgencia = parseInt(this.route.snapshot.paramMap.get('id'));
        this.listaArtistas = this.baseDeDatos.obtenerListaArtistas(this.idAgencia);
    }

    return() {
        this.router.navigate(['/tabs/tab2']);
    }

    async presentModal() {

        const modal = await this.modalController.create({
            component: ModalCrearArtistaPage,
            componentProps: {
                'idAgencia': this.idAgencia
            }

        });
        await modal.present();
    }

    buscarArtista() {
        if (this.idAgencia !== null) {
            this.listaArtistas = this.baseDeDatos.buscarArtista(this.busqueda, this.idAgencia);
        }
    }

    eliminarArtistas(id: number) {
        this.listaArtistas = this.baseDeDatos.eliminarArtista(id);
    }

}
