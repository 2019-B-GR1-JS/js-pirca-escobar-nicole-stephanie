
const fs = require('fs');

const sumarDosNumeros=(correcto)=>{
    return new Promise(
        (resolve, reject)=>{
            if(correcto){
                resolve('YEII');
            }else{
                reject('BUU');
            }

            //REJECT ('BUU');
        }
    );

};

const promesaSumarDosNumeros =sumarDosNumeros();
console.log('01) Iniciar1');
promesaSumarDosNumeros
    .then(
        (ok)=>{
            console.log('OK',ok)
        }
    )
    .catch(
        (error)=>{
            console.log('Error',error);
        }
    );
console.log('02)Terminar');

//toda promesa es asincrona
 const pathArchivo='./callbacks.js';
const leerArchivo = (pathArchivo) => {
    return new Promise(
        (resolve, reject) => {
            // res -> resolve, rej -> reject
            fs.readFile(
                pathArchivo,
                'utf8',
                (error, archivoLeido) => { // Callback
                    if (error) {
                        reject(error);
                    } else {
                        resolve(archivoLeido);
                    }
                }
            );
        }
    );
};



leerArchivo('./callbacks.js')
    .then(
        (contenidoCallbackjs) => {
            //console.log(contenidoCallbackjs);
            return leerArchivo('./04-funciones.js') // Promesa
        }
    )
    .then(
        (contenidoFuncionesjs) => {
           // console.log(contenidoFuncionesjs);
        }
    )
    .catch(
        (error)=>{
           // console.log('Error JS',error);
        }

    );

//utilizar de una manera sincrona

const nombreArchivo ='./callbacks.js';
console.log('INICIA SINCRONO')
try{
    // cuando usen sincrono utilizar un try catch
    const contenidoArchivo=fs.readFileSync(
        nombreArchivo,
        'utf-8'
        );
    console.log(contenidoArchivo);
    console.log('SE leyo sincronamente')
}catch (error) {
    console.log('Error:', error);
}


console.log('TERMINA SINCRONO')




//PROMESA
// transformar una promesa a codigo sincrono
// Necesito de una Function o Function Anonymous
// 1) async (Permite usar codigo sincrono dentro de la funcion)
// 2) Para transformar PROMESA -> SINCRONO
//  "aways"
async function leerArchivoSync() {
    try{
        const contenido = await leerArchivo(nombreArchivo);// esto nos devuelve una promesa
        console.log(contenido);
        console.log('LEIMOS CON ASYNC AWAIT');
        return 1;

    }catch (error) {
        console.error('Error', error);
        return 0;

    }
// Funciones que son una funcion asincrona como el readFile que no es una promesa -> todas las funciones se las pueden transformar a promesas
    //las podemos transformar una promesa a codigo sincrono
}
 leerArchivoSync()
     .then(
         (numero)=> {
             console.log(numero); //1
         }
     ).catch(
     (numero)=>{
         console.log(numero); //0
     }
 ); // Toda funcion que tiene un async Es una promesa
