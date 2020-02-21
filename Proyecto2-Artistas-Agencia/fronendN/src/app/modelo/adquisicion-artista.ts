import {ItemAdquisicionCarrito} from './item-adquisicion-carrito';

export interface AdquisicionArtista {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    nombreManager: string;
    nombreProductor: string;
    nombreArtita: string;
    direccion: string;
    telefono: string;
    correo: string;
    totalValorMarca: number;
    carrito?: ItemAdquisicionCarrito[];
    
}