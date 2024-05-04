// Importamos las dependencias necesarias para que nuestra aplicación esté andando.

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Importamos las funciones necesarias con las que hemos ido trabajando.

// import { dbInit } from "./Databases/db-init.js" // ÉSTE SE USARÁ EL DÍA DEL PARCIAL. NOS DARÁN LA BBDD.
import crearBaseDatosClientes from "./Databases/db-mockaroo.js"; // COMO TUVIMOS QUE CREAR LA BASE DE DATOS, IMPORTAMOS ÉSTE.
import { conseguirTodosLosClientes, conseguirClientesFiltroId, conseguirNombreYApellidoClientes } from "./Services/clientes.service.js";

// SON TODOS LOS SERVICIOS QUE HEMOS TRABAJADO HASTA AHORA.

// Configurando dotenv, para que apunte al puerto que nosotros configuramos en "./Config/.env"
// Acordarse que cualquier sintaxis de configuración, va entre llaves, pues usa la notación JSON.

dotenv.config({ path : "./Config/.env"});

// Inicializamos nuestro servidor de Express que es el que mediará todo el enrutamiento de la App y levantará el servidor. Ésto se usa en lugar de inicializar la App con HTTP debido a que es mucho más fácil. Es la razón por la cual usamos Express.

// Le asignamos a una variable la función activa de express(), que llama a la ejecución de éste.

const app = express();

// Hacemos que express, a través de app, llame al módulo de cors() y éste se active, permitiendo el uso de APIs foráneas al cliente Web nativo (que la API que creamos funcione en el navegador).

app.use(cors());

// Endpoints: Acá crearemos los enrutamientos, para cada enlace o URL, le devolveremos al cliente algo.

// ENDPOINT DE PRUEBA - QUE DEVUELVA EL ESTADO DEL CONSUMO DE LA API
app.get("/status", ( req, res ) => {

    try {
        res.json({ respuesta : "STATUS: OK | STATUS CODE: " + res.status(200)});
    } catch ( error ) {
        res.json({ respuesta : "STATUS: ERROR DEL SERVIDOR | STATUS CODE: " + res.status(500)});
    }

})

// ENDPOINTS DE CONSUMO DE LOS MICROSERVICIOS - ACÁ LE ASIGNAREMOS UN EDPOINT PARA CADA MICROSERVICIO QUE CREAMOS PREVIAMENTE.

// SE CREAN LOS ENDPOINTS, ESPECIFICANDO app (o express()) SEGUIDO DE, POR CADA PUNTO, EL VERBO HTTP, LA DIRECCIÓN URL QUE QUEREMOS QUE TENGA, Y DESPUÉS EL SERVICIO A CONSUMIR.

app
.get("/clientes", conseguirTodosLosClientes)
.get("/clientes/filtrados", conseguirClientesFiltroId)
.get("/clientes/nombres", conseguirNombreYApellidoClientes);

// PONEMOS A ANDAR EL SERVIDOR - CREANDO LA FUNCIÓN MAIN()

(async function main() {

    // Le asignamos el puerto que queremos que escuche, en .env, nosotros le dimos al Backend el puerto 4000. Le estamos asignando que, o le de ese, o que por defecto adquiera el 4000.

    const PORT = process.env.port || 4000;

    // Inicializamos la conexión a la BBDD - EN ESTE CASO, NO EXISTÍA Y LA TUVIMOS QUE CREAR. EN EL PARCIAL USAR dbInit()

    await crearBaseDatosClientes();

    // Configurar el puerto, usaremos app o express(), y usaremos el método .listen() para que escuche el puerto.

    app.listen(PORT, () => {
        console.log(`"Puerto listo y escuchando en: ${PORT}"`);
    })

})();