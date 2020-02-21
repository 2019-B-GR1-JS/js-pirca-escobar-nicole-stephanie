import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosProductorService {
  nombreProductor: string = '';

  constructor() {
  }

  guardarNombreProductor(nombre: string) {
    this.nombreProductor = nombre;
    this.guardarBase();
  }

  obtenerNombreProductor(): string {
    return this.nombreProductor;
  }

  existeProductor(): boolean {
    if (this.nombreProductor.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  guardarBase() {
    const data = {'nombreProductor': this.nombreProductor} //revisar
    localStorage.setItem('datosProductor', JSON.stringify(data));
  }
}