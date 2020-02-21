/**
 * Adquisicion-Artista.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreManager: {
      type: 'string'
    },
    nombreProductor: {
      type: 'string'
    },
    nombreArtita: {
      type: 'string'
    },
    direccion: {
      type: 'string'
    },
    telefono: {
      type: 'string'
    },
    correo: {
      type: 'string'
    },
    totalValorMarca: {
      type: 'string'
    }
  },
};

