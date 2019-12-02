var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component } from '@angular/core';
export let AppComponent = class {
    constructor() {
        this.title = 'componentes';
        //objetos
        this.arregloObjetos = [
            {
                id: 1,
                "nombre": "Nicole",
                apellido: 'Pirca',
                sueldo: 12.12,
                casado: false,
                comida: "https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/comida_2.jpg?itok=HmukTYgl",
                carro: null,
                ojos: undefined,
            },
            {
                id: 2,
                "nombre": "Thais",
                apellido: 'Escobar',
                sueldo: 12.12,
                casado: false,
                comida: "https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg",
                carro: null,
                ojos: undefined,
            },
            {
                id: 3,
                "nombre": "Victor",
                apellido: 'Lema',
                sueldo: 12.12,
                casado: false,
                comida: "https://dam.ngenespanol.com/wp-content/uploads/2019/03/desperdicio-de-comida.png",
                carro: null,
                ojos: undefined,
            }
        ];
    }
    imprimirSueldo(sueldo) {
        console.log(sueldo);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
