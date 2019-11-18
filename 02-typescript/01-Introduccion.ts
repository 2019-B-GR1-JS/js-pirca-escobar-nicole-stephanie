// Tranpilador
// tipo de compilador que transforma de
//un lenguaje a otro

// TYPESCRIPT
// 1) TIPOS DE DATOS (TIPADOS)
// 2) DECORADORES
// 3) CLASES

//const numero =0;
const numero: number =0;
//let nombre: string= "Nicole";
// DUCK TYPING
// INFIREINDO EL TIPO DE DATO
let nombre = "Nicole";
// nombre =1; ERROR
let fecha: Date; //Date ->Clase
                // tipo de datos "Date

fecha =new Date();
// se puede tipar las variables con clases
// se puede tipar tambien con las interfaces que son como las clases

let nicol:Estudiante; // donde estudiante es una interfaz
                        // tipo de dato "Estudiante
nicol={
    nombre: "Nicole",
    edad: 22,
};

interface Estudiante {
    nombre: string;
    edad?: number;

}

function holaMundo(): void {
    console.log('Hola');
    // SIEMPRE TIPAR SIEMPRE
    // FUNCION NO DEVUELVE NADA
}
function mensaje(nombre: string): void{
    console.log('Hola',nombre)

}

function calculadora(
    numUno: number,
    ...numeros: number[]
): number {
    console.log('Hola',nombre);
    return numUno;
}


function universidad(
    nombre: string,
    edad?: number,// sera un parametro OPCIONAL con el signo
): string {
    return `${nombre} Edad: ${edad}`;
}
universidad( "Nicole",  22);
universidad("Nicole");
// es necesario typar para reducir los errores del programador
interface Facultad{
    nombre: string;
    id: number;
}

interface Departamento {
    nombre:string;
    id: number;
    facultad: Facultad | number; // se puede tomar mas de dos tipos de datos
    //problema real  se puede cambiar con | boolean

}

const  departamentoSistemas={
    nombre:"Sistemas",
    id:1,
    facultad:{ //Facultad esta relacionada
        nombre: "Sistemas",
        id:1,
    }
};

const  departamentoSistemasSinRelaciones: Departamento={
    nombre:"Sistemas",
    id:1,
    facultad: 1
};

function imprimirDepartamento(
    departamento: Departamento
) {
    const departamentoId= departamento.facultad as number +1;
    //const departamentoId= departamento.facultad +1; // se realiza un cast
  // segundaOpcion del cast
    const departamentId =<number> departamento.facultad +1;
    // es muy sencillo 
}