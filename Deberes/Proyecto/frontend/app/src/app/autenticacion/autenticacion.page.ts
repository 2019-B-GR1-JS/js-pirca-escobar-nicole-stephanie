import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosProductorService } from '../servicios/servicios-productor/datos-productor.service';


@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.page.html',
  styleUrls: ['./autenticacion.page.scss'],
})
export class AutenticacionPage implements OnInit {
  nombreProductor = '';
  constructor(private router: Router,
              private datosProductorServices: DatosProductorService) { }

  ngOnInit() {
    this.nombreProductor = this.datosProductorServices.obtenerNombreProductor();
  }
  iniciarSesion() {
    this.datosProductorServices.guardarNombreProductor(this.nombreProductor)
    this.router.navigateByUrl("/tabs/tab1");
  }

}
