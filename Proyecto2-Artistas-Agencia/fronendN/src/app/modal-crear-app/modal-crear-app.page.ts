import {Component, OnInit, Input} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {DatosAService} from '../servicios/datos/datos-a.service';
import {Artista} from '../modelo/artista';

@Component({
    selector: 'app-modal-crear-app',
    templateUrl: './modal-crear-app.page.html',
    styleUrls: ['./modal-crear-app.page.scss'],
})
export class ModalCrearAppPage implements OnInit {

    @Input() idSistema;
    inputNombre: string = '';
    inputNickname: string;
    inputProfesion: string;
    inputfechaNacimiento: any = new Date();
    inputURL: string = '';
    inputAgencia: string;
    inputvalorMarca: number;
    idAgencia: number;

    constructor(private modalController: ModalController,
                private navParams: NavParams,
                private readonly baseDeDatos: DatosAService) {
        this.idAgencia = this.navParams.get('idAgencia');
    }

    ngOnInit() {
    }

    closeModal() {
        this.modalController.dismiss();
    }

    guardarArtista() {

        var fechaNacimi:Date = new Date();
        const fechaArray = this.inputfechaNacimiento.split("-");
        fechaNacimi.setFullYear(fechaArray[0], fechaArray[1], fechaArray[2]);
        const nuevoArtista: Artista = {

            nombre: this.inputNombre,
            nickname: this.inputNickname,
            profesion: this.inputProfesion,
            url: this.inputURL,
            fechaNacimiento: fechaNacimi,
            agencia: this.inputAgencia,
            valorMarca: this.inputvalorMarca,
            fkAgencia: this.idAgencia,
            id: Date.now()

        }
        this.baseDeDatos.agregarArtista(nuevoArtista);
        this.closeModal();
    }


}
