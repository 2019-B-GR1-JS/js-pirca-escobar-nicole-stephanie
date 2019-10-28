
const fileSystem= require('fs');
console.log('Iniciando')
fileSystem.readFile(
  './callbacks.js',
  'utf8',

    callbackLeeraRCHIVO);
fileSystem.readFile('./04-funciones.js',
    'utf8',funcionesLeerArchivo);
    funcionesLeerArchivo
fileSystem.readFile('./03-operadores.js',
    'utf8',operadoresLeerArchivos);
    objetosLeerArchivo
fileSystem.readFile('./02-objetos.js',
    'utf8',objetosLeerArchivo);



function callbackLeeraRCHIVO(error, datos){
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: erro,
            error,
        })
    }else {
        console.log('datos',datos);
    }

}
console.log('Finalizado')

//promesas se pueden concatenar: el orden es lo importante
// asincrono se va ha demorar en ejecutar  son las asincronas y se ejecutan despues cuando ya respondan el sistema operativo.

function funcionesLeerArchivo(error,datos) {
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: erro,
            error,
        })
    }else {
        console.log('datos',datos);
    }


}

function operadoresLeerArchivos(error,datos) {
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: erro,
            error,
        })
    }else {
        console.log('datos',datos);
    }

}

function objetosLeerArchivo(error,datos) {
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: erro,
            error,
        })
    }else {
        console.log('datos',datos);
    }

}

function variablesLeerArchivo(error,datos) {
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: erro,
            error,
        })
    }else {
        console.log('datos',datos);
    }

}

