import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {BaseDeDatosService} from '../servicios/datos/base-de-datos.service';
import {Artista} from "../modelo/artista";



@Component({
    selector: 'app-modal-crear-so',
    templateUrl: './modal-crear-artista.page.html',
    styleUrls: ['./modal-crear-artista.page.scss'],
})
export class ModalCrearArtistaPage implements OnInit {

    @Input() idAgencias;
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
                private readonly baseDeDatos: BaseDeDatosService) {
        this.idAgencia = this.navParams.get('idAgencias');
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
