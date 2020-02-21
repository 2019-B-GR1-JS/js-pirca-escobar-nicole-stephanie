/**
 * Agencia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


  attributes: {
    nombre: {
      type: 'string'
    },
    industria: {
      type: 'string'
    },
    fundacion: {
      type: 'string',
      columnType: 'date'
    },
    valorMarcaA: {
      type: 'number'
    },
    estadoActivo: {
      type: 'boolean'
    }, //Configuracion Papa
    arregloArtistas: { //nombre de los hijos
      collection: 'artista', //modelo a ser relacionado (hijo)
      via: 'fkAgencia' //nombre de atributo FK (hijo)
    }
  },
};

