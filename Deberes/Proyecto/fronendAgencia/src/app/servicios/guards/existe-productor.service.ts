import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {DatosProductorService} from '../servicios-productor/datos-productor.service';

@Injectable({
    providedIn: 'root'
})
export class ExisteProductorService implements CanActivate {


    constructor(private readonly _router: Router, private datosProductor: DatosProductorService) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        const estaLogeado = this.datosProductor.existeProductor();
        if (estaLogeado) {
            console.log('Bienvenido');
            return true;
        } else {
            const url = ['/autenticacion'];
            this._router.navigate(url);
            console.log('No tiene permisos');
            return false;
        }

    }
}
