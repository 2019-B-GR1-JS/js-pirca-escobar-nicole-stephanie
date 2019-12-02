var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
export let MiPrimerComponenteComponent = class {
    constructor() {
        this.tamanoImagen = "200";
        this.valor1 = 0;
        this.valor2 = 0;
        this.suma = 0;
        this.resta = 0;
        this.multiplicacion = 0;
        this.division = 0;
        this.sumarNumeros = new EventEmitter();
        this.cambioTamano = new EventEmitter();
    } // Instancia la clase (Ayuda -> Angular)
    ngOnInit() {
        console.log('Esta listo');
        console.log(this.titulo);
        console.log(this.textoImagen);
        console.log(this.textoBotonSuma);
    } // La clase está lista
    ngOnDestroy() {
    } // La clase está destruida
    tamanoMas() {
        //this.textoBotonSuma = (this.miFuncion()+this.miFuncion2()).toString();
        this.tamanoImagen = (Number(this.tamanoImagen) + 10).toString();
        //this.cambioSueldo.emit(this.textoBotonSuma);
        this.cambioTamano.emit(this.tamanoImagen);
    }
    operaTodo() {
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
        const elemento = evento.srcElement, as = any;
        this.valor1 = Number(elemento.value);
        this.operaTodo();
    }
    miFuncion2(evento) {
        const elemento2 = evento.srcElement, as = any;
        this.valor2 = Number(elemento2.value);
        this.operaTodo();
    }
};
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "titulo");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "imagen");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoImagen");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoBotonSuma");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoBotonResta");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoBotonMultiplicacion");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoBotonDivision");
__decorate([
    Output()
], MiPrimerComponenteComponent.prototype, "sumarNumeros");
__decorate([
    Output()
], MiPrimerComponenteComponent.prototype, "cambioTamano");
MiPrimerComponenteComponent = __decorate([
    Component({
        selector: 'app-mi-primer-componente',
        templateUrl: './mi-primer-componente.component.html',
        styleUrls: ['./mi-primer-componente.component.css']
    })
], MiPrimerComponenteComponent);
// class (etiqueta html) (web-component)
// Instanciar a la clase
// Clase esta lista
// Clase se destruye
