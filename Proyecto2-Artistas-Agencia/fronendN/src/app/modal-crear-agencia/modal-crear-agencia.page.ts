import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {DatosAService} from '../servicios/datos/datos-a.service';
import {Agencia} from '../modelo/agencia';

@Component({
    selector: 'app-modal-crear-agencia',
    templateUrl: './modal-crear-agencia.page.html',
    styleUrls: ['./modal-crear-agencia.page.scss'],
})
export class ModalCrearAgenciaPage implements OnInit {

    @Input() idAgencia;
    inputNombre = '';
    inputIndustria: string;
    inputFundacion: any = new Date();
    inputValorMarcaA: number;
    inputEstadoActivo = false;

    constructor(private modalController: ModalController, private readonly baseDeDatos: DatosAService,
                private navParams:NavParams,) {
        this.idAgencia = this.navParams.get('idAgencia');
    }

    ngOnInit() {
    }

    closeModal() {
        this.modalController.dismiss();
    }

    guardarAgencia() {
        let fechaFundacion: Date = new Date();
        const fechaArray = this.inputFundacion.split('-');
        fechaFundacion.setFullYear(fechaArray[0], fechaArray[1], fechaArray[2]);
        const nuevoAgencia: Agencia = {
            nombre: this.inputNombre,
            industria: this.inputIndustria,
            fundacion: fechaFundacion,
            valorMarcaA: this.inputValorMarcaA,
            estadoActivo: this.inputEstadoActivo,
            id: Date.now()
        };
        this.baseDeDatos.agregarAgencia(nuevoAgencia);
        this.closeModal();
    }
}
