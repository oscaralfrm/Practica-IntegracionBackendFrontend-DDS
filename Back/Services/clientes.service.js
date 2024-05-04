// Empezaremos por importar el modelo que creamos, desde la carpeta de Models.

import json from "sequelize";
import Cliente from "../Models/clientes.js";
import Op from "sequelize";

// Seguiremos trabajando ahora con la definición de cada servicio. Un servicio se caracteriza
// por estar asociado a una función, la cuál se llamará de acuerdo al endpoint que le pasemos
// como argumento al ROUTING de nuestro archivo app.js

// MICROSERVICIO - SELECCIÓN: CONSEGUIR TODOS LOS CLIENTES

export const conseguirTodosLosClientes = async ( req, res ) => {

    // Como toda operación sobre una BBDD, o asíncrono, la englobamos en un try... catch...
    // El objetivo de los servicios es, operar sobre la res (respuesta) y modificar su atributo
    // json, mandándole un mensaje, de éxito (devuelve lo que se consigue) o de error.

    // NOTA*: No es necesario hacer algún trabajo sobre el callback de la request (petición).

    try {

        const clientes = await Cliente.findAll();

        res.json(clientes);

    } catch ( error ) {

        console.log("No se pudieron conseguir clientes. Error: " + error);

        res
            .status(500)
            .json( { error : "No se pudieron conseguir clientes. Error." } );


    }


}

// MICROSERVICIO - SELECCIÓN: CONSEGUIR TODOS LOS CLIENTES CUYO ID ESTÉ COMPRENDIDO ENTRE 5 Y 15.

export const conseguirClientesFiltroId = async ( req, res ) => {

    try {

        const clientesFiltros = await Cliente.findAll(
            {
                where: {
                    idCliente: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                }
            }
        )

        res.json(clientesFiltros);

    } catch ( error ) {

        res
            .status(500)
            .json( { error : "No se pudieron conseguir clientes que cumplan el filtro."} );

    }

}

// MICROSERVICIO - PROYECCIÓN: CONSEGUIR EL NOMBRE Y EL APELLIDO DE LOS CLIENTES.
// Con attributes se hace la proyección. Hay que especificar también las columnas.

export const conseguirNombreYApellidoClientes = async ( req, res ) => {

    try {

        const nombresYApellidos = await Cliente.findAll({
            attributes: ["NOMBRE_CLIENTE", "APELLIDO_CLIENTE"]
        });

        res.json(nombresYApellidos);

    } catch ( error ) {

        console.log("Error: " + error);

        res
            .status(500)
            .json({ error : "No se pudo cumplir satisfactoriamente su consulta."});

    }

}
