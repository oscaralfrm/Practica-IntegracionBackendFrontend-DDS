// Primeramente, importamos nuestro objeto instanciado de la BBDD que creamos en "db.js":

import sequelize from "../db.js";

// Segundo, dejaremos los importes pendientes a los modelos/entidades de nuestra lógica de negocios, que tendrán que estar obligadamente (por un tema de consistencia) en la carpeta de Models.

import Cliente from "../Models/clientes.js"

// Tercero y por último en éste punto, creamos la función de autenticación y sincronización. Recordar que todas éstas funciones que trabajan sobre una BBDD o una API son asíncronas y en su encabezado debe llevar la palabra reservada "async".

const dbInit = async () => {

    try {

        // Autenticamos... recordar que todo lo que hagmos sobre una BBDD, o una API, es asíncrono, por lo tanto cada respuesta u operación lleva la palabra reservada "await".
        // con el método .authenticate() del objeto sequelize importado.

        await sequelize.authenticate();

        // Sincronizamos - con el método sync() del objeto sequelize importado.

        await sequelize.sync();

    } catch ( error ) {

        console.log("Error sincronizando con la BBDD: " + error);

    }

}

export default dbInit;