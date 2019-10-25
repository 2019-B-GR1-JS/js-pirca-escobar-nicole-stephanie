const arreglo=[1,2,3,4,5,6,7,8,10];
//
//for
//for(const i in arreglo){
  //  console.log('I:',i);
//}
//indices



for(let i of arreglo){ //valores
    console.log('I:',i);

}
// while
//switch no existe en PYTHON--IMPRIMIR TODOS LOS ELEMNTOS DEL ARREGLO
// el mas rapido es el for, no es matenible ya que no cumple con la regla del for.


//  OPERADORES
const resouestaForEach=arreglo .forEach (
    function (valorActual, indiceActual, arreglo) {
        console.log('valorActual',valorActual );

        //console.log('indiceActual',indiceActual);
       // console.log('arreglo',arreglo );
    }
);
//console.log('resouestaForEach',resouestaForEach) ;
//necesita un parametro

// a todos los valores de los operadores le sumemos 5

const resouestaMap=arreglo .map (// transformar o mutar el erreglo
    function (valorActual, indiceActual, arreglo) {


        return valorActual +5;
        // devolver un elemento


        const respuestaFindIndex =
            arreglo.find (
                predicate: (valorActual ) => {
                    return valorActual ==8;
        }
            );


        const respuestaFindIndex =
            arreglo.find (
                predicate: (valorActual, indice, arreglo ) => {
            return valorActual ==8;
        }
    );


// obtener el tamaño del arreglo s¡de 100 se resten todos los valores
        const respuestaFindIndex1 =
            arreglo.reduce (
                (valorIcicial, valorActual, indice, array ) => {
            return valofrIcicial + valorActual ;
        }, 0 // VALOR INICIAL
    );
//predefine una variable inicial






































    }
); // devuelve un NUEVO ARREGLO TRANSFORMADO
console.log('resouestaMap',resouestaMap) ;
//arreglo sumados 5 se transforma el areglo

console.log('arreglo',arreglo








);

const resouestaFilter=arreglo .filter (// transformar o mutar el erreglo
    function (valorActual, indiceActual, arreglo) {

        return valorActual>7;
        // devolver uuna expresion es un truty o Falsy

    }
); // NUEVO ARREGLO FILTRADO
console.log('resouestaFilter',resouestaFilter) ;
//arreglo sumados 5 se transforma el areglo



// operadores AND - OR
// OR SOME
const resouestaSome=arreglo .some (// transformar o mutar el erreglo
    function (valorActual, indiceActual, arreglo) {

        return valorActual>10 && valorActual <20;
        // devolver uuna expresion es un truty o Falsy

    }
); // NUEVO ARREGLO FILTRADO
console.log('resouestaSome',resouestaSome) ;


// comando every
const resouestaEvery=arreglo .every (//
    function (valorActual, indiceActual, arreglo) {

        return valorActual>1;
        // devolver uuna expresion es un truty o Falsy

    }
); // DEVUELVE BOOLEANO
console.log('resouestaEvery',resouestaEvery) ;


// divido para dos y sumado 7 ver si es menor a 10

// map devuelve un arreglo

const ResouestaMenoresDiez= arreglo.map((x)=>(x/2)+7).some((y)=>y<10); //
//const ResouestaMenoresDiez= arreglo.filter((x)=>(x/2)+7).some((y)=>y<10); // para saber cuales son



