/**
 * Artista.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // artitas

  attributes: {
    nombre: {
      type: 'string'
    },
    nickname: {
      type: 'string'
    },
    profesion: {
      type: 'string'
    },
    fechaNacimiento: {
      type: 'string',
      columnType: 'date'
    },
    agencia: {
      type: 'string'
    },
    valorMarca: {
      type: 'number'
    }, //Configuracion Hijo
    fkAgencia: { //Nombre del campo FK
      model: 'agencia' //Modelo a relacionarse (papa)
    },
  },
};

