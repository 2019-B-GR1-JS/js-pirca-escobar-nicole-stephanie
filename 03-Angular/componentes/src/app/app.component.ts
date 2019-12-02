import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes';
  // objetos
  arregloObjetos = [
    {
      fecha : new Date(),
      universidad : 'Escuela Politecnica Nacional',
      id: 1, // Number
      nombre: 'Nicole', // String
      apellido: 'Pirca', // string
      sueldo: 12.12, // number
      casado: false, // boolean
      comida: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/comida_2.jpg?itok=HmukTYgl',
      carro: null,
      ojos: undefined,
    },
    {
      id: 2, // Number
      nombre: 'Thais', // String
      apellido: 'Escobar', // string
      sueldo: 12.12, // number
      casado: false, // boolean
      comida: 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg',
      carro: null,
      ojos: undefined,
    },
    {
      id: 3, // Number
      nombre: 'Victor', // String
      apellido: 'Lema', // string
      sueldo: 12.12, // number
      casado: false, // boolean
      comida: 'https://dam.ngenespanol.com/wp-content/uploads/2019/03/desperdicio-de-comida.png',
      carro: null,
      ojos: undefined,
    }
  ];
  fecha: any;
  imprimirSueldo(sueldo: string) {
    console.log(sueldo);
  }
}
