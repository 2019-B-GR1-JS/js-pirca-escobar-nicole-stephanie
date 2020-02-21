import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from '../servicios/servicio-carrito/servicio-carrito.service';
import { AdquisicionArtista } from '../modelo/adquisicion-artista';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private readonly servicioAdquisicion: ServicioCarritoService) {
  }

  listaAdquisiones: AdquisicionArtista [] = [];
  busqueda: string = '';
  flag: boolean = true;

  ngOnInit() {
    this.listaAdquisiones = this.servicioAdquisicion.obtnerAdquisiciones();
  }

  buscarPorProductor() {
    this.flag = false;
  }
  buscarPorManger() {
    this.flag = true;
  }
  buscarPorAdquisicion() {
    console.log('lista De Adquisiciones',this.listaAdquisiones);
    if (this.flag === true) {
      this.listaAdquisiones = this.servicioAdquisicion.buscarAdquisicion(this.busqueda);

    } else {
      this.listaAdquisiones = this.servicioAdquisicion.buscarFacturasPorProductor(this.busqueda);
    }
  }
}
