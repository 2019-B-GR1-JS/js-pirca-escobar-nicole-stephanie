import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})


export class MiPrimerComponenteComponent implements OnInit {

  @Input()
  public titulo: string;
  @Input()
  imagen: string;
  @Input()
  public textoImagen: string;
  @Input() // Atributo Propiedad
  public textoBotonSuma: string;

  @Input() // Atributo Propiedad
  public textoBotonResta: string;

  @Input() // Atributo Propiedad
  public textoBotonMultiplicacion: string;

  @Input() // Atributo Propiedad
  public textoBotonDivision: string;

  tamanoImagen = "200";
  valor1 = 0;
  valor2 = 0;
  suma = 0;
  resta = 0;
  multiplicacion = 0;
  division = 0;

  @Output() // EVENTO
  public sumarNumeros = new EventEmitter();

  @Output() // EVENTO
  public cambioTamano = new EventEmitter();

  constructor() {
  } // Instancia la clase (Ayuda -> Angular)

  ngOnInit() {
    console.log('Esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBotonSuma);
  } // La clase está lista

  ngOnDestroy(): void {
  } // La clase está destruida

  tamanoMas() {
    //this.textoBotonSuma = (this.miFuncion()+this.miFuncion2()).toString();
    this.tamanoImagen = (Number(this.tamanoImagen) + 10).toString();
    //this.cambioSueldo.emit(this.textoBotonSuma);
    this.cambioTamano.emit(this.tamanoImagen);
  }

  operaTodo(){
    this.suma = this.valor1 + this.valor2;
    this.textoBotonSuma = (this.suma).toString();
    this.resta = this.valor1 - this.valor2;
    this.textoBotonResta = (this.resta).toString();
    this.multiplicacion = this.valor1 * this.valor2;
    this.textoBotonMultiplicacion = (this.multiplicacion).toString();
    this.division = this.valor1 / this.valor2;
    this.textoBotonDivision = (this.division).toString();
  }

  miFuncion(evento) {
    const elemento = evento.srcElement as any;
    this.valor1 = Number(elemento.value);
    this.operaTodo();
  }

  miFuncion2(evento) {
    const elemento2 = evento.srcElement as any;
    this.valor2 = Number(elemento2.value);
    this.operaTodo();
  }
}

// class (etiqueta html) (web-component)
// Instanciar a la clase
// Clase esta lista
// Clase se destruye
