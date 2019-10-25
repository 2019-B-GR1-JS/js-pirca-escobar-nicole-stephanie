function calculo(numUno,
                 numDos,
                 funcionCalculo){
    const total= numUno+numDos;
    return funcionCalculo(numUno,numDos,total);
    //funciones como parametros
}

const numeroUno=5;
const numeroDos=5;
const suma= (numUno, numDos,total)=>{
    return total;
};

console.log(suma) ; //Definicion de la function
console.log(suma(1,2,3));// con parentesis la ejecucion ls
//recibe

const resultadoCalculo= calculo(
  numeroUno,
  numeroDos,
 // funcionCalculo: (numeroUno,numeroDos,total)=>{
    //  return total/2;
//}
  //funciones como parametros
);
console.log('total',resultadoCalculo);

function forEchaLocal(arreglo, funcion) {
    for(let indiceInicial =0; indiceInicial<arreglo.length;
indiceInicial ++){
        funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        );
    }
}


forEchaLocal(
    [1,2,3,45,6],
    (valorActual,indiceActual,arreglo) =>{
        console.log(valorActual)
}
);
// funcion Map

function forMap(arreglo,funcion) {
    const newArreglo=[];


        for(let indiceInicial =0; indiceInicial<arreglo.length;
            indiceInicial ++){

            newArreglo.push(funcion(
                arreglo[indiceInicial],
                indiceInicial,
                arreglo


            ));

    }
        console.log(newArreglo);
    }
    forMap(
        [1,2,4,5],(valorActual,indiceActual,arreglo)=>{
            return valorActual+5;
        }
    );



function forFilter(arreglo,funcion) {
    const newArreglo=[];


    for(let indiceInicial =0; indiceInicial<arreglo.length;
        indiceInicial ++){

        newArreglo.push(funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo


        ));

    }
    console.log(newArreglo);
}
forMap(
    [1,2,4,5],(valorActual,indiceActual,arreglo)=>{
        return valorActual>7;
    }
);





