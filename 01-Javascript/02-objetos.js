//OBJETOS

// 02-objetos.js  tienen una llave y un valor

//VARIABLES INMUTABLES(NO CAMBIA) USAR CONST
// no puede ser reasignado: es igualar
// al arreglo si se le puede modificar por metodos y propietades

const arreglo =[1,2,3,4,5,6,7,8,9,10];
console.log('arreglo', arreglo)
arreglo.push(11);// un arreglo que si puede ser modificada deende d elos metodos.
console.log('arreglo',arreglo)
// una variable constante no puede ser reacsignada
arreglo.pop();
console.log ('arreglo', arreglo)



    //agregar al final
arreglo.splice(0,1,1.1); // agregar en la posicion que se desea
console.log ('arreglo', arreglo)



arreglo.unshift(0);
console.log ('arreglo', arreglo)

let  arregloNumber=[1,2,3,4];
//arregloNumber=["a","b","c"]; //String
//arregloNumber["a",2]
//no es buena idea escribir codigo en java  script ---undefined.
//function suma(a,b) {
  //  if (typeof a=='number'&& typeof  b=='number'){
    //    return a+b;
    //}

}//
// los arreglos pueden ser variables es importante usar las constantes.
RespuestaIndice=arreglo.indexOf(4);
console.log(RespuestaIndice)

//arreglo.splice(RespuestaIndice=arreglo.indexOf(4);)


