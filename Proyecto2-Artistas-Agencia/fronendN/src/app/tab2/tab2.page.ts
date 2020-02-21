import {Component} from '@angular/core';
import {Agencia} from '../modelo/agencia';
import {DatosAService} from '../servicios/datos/datos-a.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalCrearAgenciaPage} from '../modal-crear-agencia/modal-crear-agencia.page';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    listaAngencias: Agencia[] = [];
    busqueda: string = '';

    constructor(private readonly baseDeDatos: DatosAService,
                public modalController: ModalController,
                private router: Router
    ) {
    }

    ngOnInit() {

        this.listaAngencias = this.baseDeDatos.obtenerListaAgencias();

    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: ModalCrearAgenciaPage
        });
        await modal.present();
    }


    eliminarAgencia(id: number) {
        this.listaAngencias = this.baseDeDatos.eliminarAgencia(id);
    }


    buscarAgencia() {
        this.listaAngencias = this.baseDeDatos.buscarAgencia(this.busqueda);
    }

    verAgencia(id: number, nombre: string) {

        this.router.navigate(['/menu-aplicacion', {'id': id, 'nombre': nombre}]);
    }

}



