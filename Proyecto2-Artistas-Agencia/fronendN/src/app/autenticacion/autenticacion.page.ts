import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiciosProductorService} from "../servicios/servicios-productor/servicios-productor.service";

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.page.html',
  styleUrls: ['./autenticacion.page.scss'],
})
export class AutenticacionPage implements OnInit {

  nombreProductor = '';
  constructor(private router: Router,
              private datosProductorServices: ServiciosProductorService) { }

  ngOnInit() {
    this.nombreProductor = this.datosProductorServices.obtenerNombreProductor();
  }
  iniciarSesion() {
    this.datosProductorServices.guardarNombreProductor(this.nombreProductor)
    this.router.navigateByUrl("/tabs/tab1");
  }

}
