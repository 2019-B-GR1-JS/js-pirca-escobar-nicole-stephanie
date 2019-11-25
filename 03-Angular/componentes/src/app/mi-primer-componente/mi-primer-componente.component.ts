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
  @Input()
  public textoButton: string;

  @Output () //EVENTO
  public cambioSueldo = new EventEmitter();
  tamanio: string;

  // definicion de mi evento desde el angular core

  constructor() {
    console.log('Instanciando');
  }  // instancia a la clase (nOS AYUDA EL MISMO ANGULAR)
// esto es una interfaz que se implementa


  ngOnInit() { // La clase esta lista
    console.log('EST LISTO');
    console.log('Esta listo');
  }

  ngOnDestroy(): void { // la calase esta destruida

  }

  saludar(){
    alert("HOLAAA");
  }

  //class (etiqueta html) (web-component)
  // instanciar a la clase
  // clase esta lista
  // clase se destruye
aumentarSueldo(){
    this.textoButton =(Number(this.textoButton) +1).toString(); //transformar
    this.cambioSueldo.emit(this.textoButton);
}
aumentarImagen(){
    this.tamanio=(Number(this.tamanio)+1).toString();
    
}
}
