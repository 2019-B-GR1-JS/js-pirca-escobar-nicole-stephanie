/**
 * Libro.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'String'
    },
    isbn: {
      type: 'String'
    },
    idUsuario: {
      model: 'usuario',
      required: true
    }
  },
};

