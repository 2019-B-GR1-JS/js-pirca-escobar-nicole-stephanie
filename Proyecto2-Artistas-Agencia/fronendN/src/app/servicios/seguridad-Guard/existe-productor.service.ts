import {Injectable} from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {ServiciosProductorService} from '../servicios-productor/servicios-productor.service';

@Injectable({
    providedIn: 'root'
})
export class ExisteProductorService implements CanActivate {

    constructor(private readonly _router: Router,
                private datosProductor: ServiciosProductorService) {
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
