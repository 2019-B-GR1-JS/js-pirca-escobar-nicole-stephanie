

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
console.log('01) Iniciar');
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
const leerArchivo =()=>{
    return new Promise(
        (resolve,reject)=>{
            //res-> resolve, rej->reject
            fs.readFile(
                pathArchivo,
                'utf8',
                (error,archivoLeido)=>{
                    if(error){
                        rejec(error);
                    }else{
                        resolve(archivoLeido);
                    }

                }
            );
        }

    );
}


leerArchivo('./callback.js')
    .then(
        (contenidoCallbacks)
    )


