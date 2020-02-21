import { ItemAdqusicionCarrito } from './item-adqusicion-carrito';


export interface AdquisicionArtista {

    createdAt?: number;
    updatedAt?: number;
    id?: number;
    nombreManager: string;
    nombreProductor: string;
    nombreArtista: string;
    direccion: string;
    telefono: string;
    correo: string;
    totalValorMarca: number;
    artista: string;
    carrito?: ItemAdqusicionCarrito[];
}