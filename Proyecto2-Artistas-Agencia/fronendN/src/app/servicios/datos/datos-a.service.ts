import {Injectable} from '@angular/core';
import {Artista} from '../../modelo/artista';
import {Agencia} from '../../modelo/agencia';
import {ServicioAgenciaHttpService} from '../servicio-http/servicio-agencia-http.service';
import {ServicioArtistaHttpService} from '../servicio-http/servicio-artista-http.service';

@Injectable({
    providedIn: 'root'
})
export class DatosAService {
    listaArtistas: Artista[] = [];
    listaAgencias: Agencia[] = [];

    constructor(
        private readonly _AgenciaHttpService: ServicioAgenciaHttpService,
        private readonly _ArtistaHttpService: ServicioArtistaHttpService,
    ) {
    }

    leerBase() {
        var getObject = JSON.parse(localStorage.getItem('dataAgenciaYArtist'));
        this.listaAgencias = getObject['listaAgencias'];
        this.listaArtistas = getObject['listaArtistas'];
    }

    obtenerListaAgencias(): Agencia[] {
        const todasAgencias$ = this._AgenciaHttpService
            .obtenerTodos();

        todasAgencias$.subscribe(
            (agenciasObtenidas) => {
                this.listaAgencias = agenciasObtenidas;
                console.log(agenciasObtenidas);
            },
            (error) => {
                console.log(error);
            }
        );
        return this.listaAgencias;
    }

    agregarAgencia(agenciaNueva: Agencia) {
        this.listaAgencias.push(agenciaNueva);
        const agenciaCrear$ = this._AgenciaHttpService
            .crear(
                {
                    nombre: agenciaNueva.nombre,
                    industria: agenciaNueva.industria,
                    fundacion: agenciaNueva.fundacion,
                    valorMarcaA: agenciaNueva.valorMarcaA,
                    estadoActivo: agenciaNueva.estadoActivo
                });

        agenciaCrear$.subscribe(
            (nuevaAgencia) => {
                console.log(nuevaAgencia);
            },
            (error) => {
                console.log(error);
            }
        );
        return this.listaAgencias;
    }

    eliminarAgencia(idAgencia: number): Agencia[] {
        this.listaAgencias.forEach(element => {
            if (element.id === idAgencia) {
                const indice = this.listaAgencias.indexOf(element);
                this.listaAgencias.splice(indice, 1);
                this.borrarAgenciaHTTP(idAgencia);
            }
        });
        return this.listaAgencias;
    }

    borrarAgenciaHTTP(idAgencia) {
        const agenciaBorrar$ = this._AgenciaHttpService
            .eliminar(idAgencia);

        agenciaBorrar$.subscribe(
            (agenciaBorrada) => {
                console.log(agenciaBorrada);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    buscarAgencia(busqueda: string): Agencia[] {
        var indices = [];
        this.listaAgencias.forEach(
            function (item, indice, array) {
                if (item.nombre.includes(busqueda)) {
                    indices.push(indice);
                }
            }
        );
        var listaSearch = indices.map(i => this.listaAgencias[i]);
        return listaSearch;

    }

    obtenerTodosLosArtistas(): Artista[] {
        var todosArtistas$ = this._ArtistaHttpService
            .obtenerTodos();
        todosArtistas$.subscribe(
            (artistasObtenidas) => {
                this.listaArtistas = artistasObtenidas;

            },
            (error) => {
                console.log(error);
            },
        );
        return this.listaArtistas;

    }

    obtenerListaArtistas(idBusqueda: number): Artista[] {
        var indices = [];
        this.obtenerTodosLosArtistas();
        this.listaArtistas.forEach(
            function (item, indice, array) {
                if (item.fkAgencia === idBusqueda) {
                    indices.push(indice);
                }
            }
        );
        var listaSearch = indices.map(i => this.listaArtistas[i]);
        return listaSearch;

    }

    agregarArtista(artistaNuevo: Artista) {

        const artistaCrear$ = this._ArtistaHttpService
            .crear(
                {
                    nombre: artistaNuevo.nombre,
                    nickname: artistaNuevo.nickname,
                    url: artistaNuevo.url,
                    fechaNacimiento: artistaNuevo.fechaNacimiento,
                    profesion: artistaNuevo.profesion,
                    agencia: artistaNuevo.agencia,
                    valorMarca: artistaNuevo.valorMarca,
                    fkAgencia: artistaNuevo.fkAgencia
                });

        artistaCrear$.subscribe(
            (nuevoArtista) => {
                this.listaArtistas.push(nuevoArtista);
            },
            (error) => {
                console.log(error);
            }
        );

        return this.listaArtistas;
    }

    eliminarArtista(idArtista: number): Artista[] {
        this.listaArtistas.forEach(element => {
            if (element.id === idArtista) {
                const indice = this.listaArtistas.indexOf(element);
                this.listaArtistas.splice(indice, 1);
                this.eliminarArtistaHTTP(idArtista);
            }
        });
        return this.listaArtistas;
    }

    eliminarArtistaHTTP(idArtista) {
        const artistaBorrar$ = this._ArtistaHttpService
            .eliminar(idArtista);

        artistaBorrar$.subscribe(
            (artistaBorrada) => {
                console.log(artistaBorrada);
            },
            (error) => {
                console.log(error);
            }
        );

    }

    buscarArtista(busqueda: string, id: number): Artista[] {

        var indices = [];
        console.log(this.listaArtistas);
        this.listaArtistas.forEach(
            function (item, indice, array) {
                console.log('busqueda', item.fkAgencia);
                if (item.fkAgencia.id !== null) { // REVISAR && item.fkAgencia.id === id
                    if (item.nombre.includes(busqueda) && item.fkAgencia.id === id) {
                    }
                }
            }
        );

        var listaSearch = indices.map(i => this.listaArtistas[i]);
        return listaSearch;

    }

    iniciarServicio() {
        console.log('Base Iniciada');
        this.leerBase();
    }


}
