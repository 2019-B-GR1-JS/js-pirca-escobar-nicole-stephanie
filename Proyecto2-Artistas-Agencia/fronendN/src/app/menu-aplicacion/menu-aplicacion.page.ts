import {Component, OnInit} from '@angular/core';
import {Artista} from '../modelo/artista';
import {ActivatedRoute, Router} from '@angular/router';
import {DatosAService} from '../servicios/datos/datos-a.service';
import {ModalController} from '@ionic/angular';
import {ModalCrearAppPage} from '../modal-crear-app/modal-crear-app.page';

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
        private readonly baseDeDatos: DatosAService,
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
            component: ModalCrearAppPage,
            componentProps: {
                'idAgencia': this.idAgencia
            }

        });
        await modal.present();
    }

    buscarArtista() {
        this.listaArtistas = this.baseDeDatos.buscarArtista(this.busqueda, this.idAgencia);
    }

    eliminarArtistas(id: number) {
        this.listaArtistas = this.baseDeDatos.eliminarArtista(id);
    }

}
