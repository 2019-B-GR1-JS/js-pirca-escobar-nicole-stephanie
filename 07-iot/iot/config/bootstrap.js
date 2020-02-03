/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const axios = require('axios');

const moduloRasberry = {
  calcularProximidad: function () {
    return Math.random() * (10 - 0) + 0;
  }
}
module.exports.bootstrap = async function () {

  setInterval(async () => {
      const valor = moduloRasberry.calcularProximidad();
      console.log('Valor proximidad', valor);
      const respuestaServidor = await axios.post('http://localhost:1338/MonitoreoMovimiento', {
        valor: valor
      });
      // console.log();
    }, 2000
  )
};
