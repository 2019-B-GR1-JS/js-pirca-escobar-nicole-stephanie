import { Agencia } from './agencia';

export interface Artista {

    id?: number;
    createdAt?: number;
    updatedAt?: number;
    nombre: string;
    nickname: string;
    profesion: string;
    fechaNacimiento: Date;
    agencia: string;
    valorMarca: number;
    url: string;
    fkAgencia?: number | Agencia | any;
}