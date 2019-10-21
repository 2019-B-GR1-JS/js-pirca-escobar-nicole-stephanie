// definir funciones que devuelven algo

function imprimirMensaje(){
console.log("Mensaje");
}
// no hay retorno
const respuesta =imprimirMensaje(1,2,"asd");
console.log(respuesta);// void undefined


function imprimirMensaje11(mensaje){
    console.log(`Mensaje ${mensaje}`);
    console.log("Mensaje" +mensaje);
}
// no hay retorno
const respuesta =imprimirMensaje1("Nicole");
console.log(respuesta);// void undefined

//const respuesta = imprimirMensaje1(mensaje:{a:1});
//console.log(resouesta);
// validar que solo entren string en la funcion

// funciones que no  devuelven nada en lenguajes tipados
// hapi libreria poderosa no es bueni en utilizar en negocios

//

function imprimirMensaje2(mensaje) {
    if(typeof mensaje ==`number` ||
        typeof mensaje== 'string'){
        const impresion =(impresion);

    }


}


function sumarDosElementos(numeroUno, numeroDos) {
    return numeroUno +numeroDos;

}
console.log(sumarDosElementos (1,6);


function sumarElementos(numeroUno,  ...otro) {
    console.log(otro);//[2,3,4,5]


}
console.log(sumarElementos (1,2,3,4,5));
//genera un arreglo

// arreglos de parametros infinitos
/// ...-> DESTRUCTURAR PARAMETROS

function sumarElementos(numeroUno,  ...arreglosParametrosInitos) {
    console.log(arreglosParametrosInitos);//[2,3,4,5]
    if(arreglosParametrosInitos){
        return arreglosParametrosInitos.reduce(
            (valorInicial, valorActual)=>{
                return valorInicial + valorActual;
            }
        )
    }

}

const suma =sumarElementos(1,2,3,4,5);
// parametros infinitos
console.log(suma);
//genera un arreglo

const restar = function restarF(a,b) {
    return a-b;

}
// se puede acsignar una variable a una funcion ...se puede omitir el nombre de la funcion


//fat arrow function => es una funcion anonima por que no tiene nombre Anonymous function
// se usa cuando se esta asignando a una variables y a
// las que no tienen flecha son las fat y las que no tienen es una funcion cualquiera.

const transformarMayuscula =(letra)=>{
    return letra.toUpperCase();
};
const tranformaMayuscula2=(letra)=> letra.toUpperCase();

//solo cuando hay un parametro
const traanformarMayuscula3= letra=> letra.toUpperCase();




// destructrar el arreglo

const arreglosNumeroUno =[1,2,3,5,6];
const arregloDosElementos=[7,8,9,10];
const arregloUnido=[...arreglosNumeroUno, ...sumarDosElementos];
sumarElementos(...arreglosNumeroUno);
sumarDosElementos(...arreglosNumeroUno);
// mandar un arreglo como funcion.
// destructurar arreglos

const objetoNicole= {
    nombre:'Nicole',
};
const objetoPirca ={
    apellido:'Pirca'
};
const objetoNicolePirca= {
  ...objetoNicole,
  ...objetoPirca,
  edad: 22,
};







// No trabajar con objetos

// delete objetoNic se borra todo
// sin ningun parametro se elimina
realizar la CLONACION


const oAEEString = JSON.stringify(objetoNicolePirca);
console.log(typeof (oAEEString))
const oAEEPClonDO=JSON.parse(oAEEString);
console.log(oAEEString);
oAEEString.edad=21;
console.log(oAEEPClonDO);
console.log(objetoNicolePirca);

// destruccturacionn de objetos
const clonadoAE ={
    ...objetoNicolePirca
};
console.log(clonadoAE));
clonadoAE.edad=23;
console.log(objetoNicolePirca);

// es la misma es mejor utilizar funciones que no se guerdan referencias 
function cambiarEdad(edad, objeto) {

    objeto.edad=edad;
    return objeto;
}



