/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


};

// HTTP
// RESTFULL
// METODO HTTP + URL + *Parametros
// *Parametros
// Ruta -> REQUERIDOS
// http://localhost:1337/usuario/1 -> id
// http://localhost:1337/usuario/2 -> id

// Query -> SIEMPRE OPCIONALES
// http://localhost:1337/usuario
// http://localhost:1337/usuario?nombre=Adrian&apellido=Eguez
// http://localhost:1337/usuario?nombre=Adrian
// Consulta Ruta -> llegan como "TEXTO"

// Body
// http://localhost:1337/usuario
/*
{
  nombre: "Nicole",
  apellido: "Pirca",
  correo: "a@a.com", -> string
  edad: 1, -> number
  casado: true, -> boolean
}

{
  pedido: 5, -> number
  detallePedido:{
    producto: 1,  -> number
    cantidad: 5,  -> number
    estaHabilitado: true,  -> boolean
    descripcion: "Compro al contado"  -> string
  }
}
* */


// METODO HTTP (Cliente)

// GET -> Buscar
// POST -> Crear
// PUT -> Actualizar
// DELETE -> Eliminar

// CODIGO HTTP (Servidor)
// 1XX -> INFORMACION
// 2XX -> OK
// 3XX -> REDIRECCIONES
// 4XX -> ERROR CLIENTE 404 -> Not Found (Cliente)
// 5XX -> ERROR SERVIDOR 500 -> Internal Server Error (Servidor)



// Find ( Varios registros )
// GET http://localhost:1337 + modelo
// Ej: GET http://localhost:1337/usuario
// FindOne
// GET http://localhost:1337 + modelo/:id
// Ej: GET http://localhost:1337/usuario/1
// CreateOne
// POST http://localhost:1337 + modelo
// Ej: POST http://localhost:1337/usuario
// UpdateOne
// PUT http://localhost:1337 + modelo/:id
// Ej: PUT http://localhost:1337/usuario/1
// DeleteOne
// DELETE http://localhost:1337 + modelo/:id
// Ej: DELETE http://localhost:1337/usuario/1


