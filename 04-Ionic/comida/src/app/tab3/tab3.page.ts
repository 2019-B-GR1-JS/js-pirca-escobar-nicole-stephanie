import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    usuario = {
        nombre: '',
        correo: '',
        edad: '',
        password: '',
        passwordConfirmation: ''
    };

    constructor() {
    }
    validarPasswordsIguales(): boolean {
        if(this.usuario.password === this.usuario.passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    }

    crearUsuario(formulario: NgForm) {
        // el # podemos utilizar
        console.log(formulario);
    }

}
