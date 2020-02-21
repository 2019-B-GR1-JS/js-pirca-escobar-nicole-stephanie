export interface Agencia{

    id?: number;
    createdAt?: number;
    updatedAt?: number;
    nombre: string;
    industria: string;
    fundacion: Date;
    valorMarcaA: number;
    estadoActivo: boolean;
    arregloArtistas?: any[];
}