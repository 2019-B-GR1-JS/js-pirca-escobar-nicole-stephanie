// JS0N
// var nombre = "Adrian"; nunca en la vida
// Mutable (No queremos)
let nombre = "Nicole"
//nombre = "Carolina";
nombre = 1;
//No Mutables (Inmutable)(No cambia)
const cedula = 1724222078;
const mensaje = `
Siempre usar "const"
Si ya toca usar "let"
Nunca vamos a usar "var"
`;

let nombres = "Nicole";
console.log(typeof nombres, 'nombres');
let numeros = 1;
console.log(typeof numeros, 'numeros');
numeros = 1.1;
console.log(typeof numeros, 'numeros decimales');
let casado = false;
console.log(typeof casado, 'casado');
let hijos = null;
console.log(typeof hijos, 'hijos');
let mascotas = [];
console.log(typeof mascotas, 'mascotas');
let hermana = {};
console.log(typeof hermana, 'hermana');
//Condicion!
//Truty
//Falsy
//cmd + alt + l
if ("") {
    console.log("truty");
} else {
    console.log("falsy");
}

if ("aL") {
    console.log("truty");
} else {
    console.log("falsy");
}

if (-1) {
    console.log("truty");
} else {
    console.log("falsy");
}

if (0) {
    console.log("truty");
} else {
    console.log("falsy");
}

if (1) {
    console.log("truty");
} else {
    console.log("falsy");
}

if ([]) {
    console.log("truty");
} else {
    console.log("falsy");
}

if ({}) {
    console.log("truty");
} else {
    console.log("falsy");
}

//JSON
const Nicole = {
    "nombre": 'Nicole',
    'apellido': "Pirca Escobar",
    edad: 23,
    casado: false,
    hijos: null,
    hermana: {nombre: "Nicole"},
    mascotas: [
        {
            nombre: "Randy",
        }
    ],
};
console.log(Nicole.nombre); //Nicole
console.log(Nicole.hermana); //{ nombre: "Nicole"}
console.log(Nicole.mascotas[0].nombre);
Nicole.sueldo = 1.2;
Nicole["deudas"] = 10000;
console.log(Nicole);
delete Nicole.hijos;
console.log(Nicole);


