import sequelize from  "./db.js";

// Ésta función se crea, si por casualidad NO TENEMOS LA BBDD y LA NECESITAMOS USAR EN UN EJERCICIO.
// LO MÁS PROBABLE ES QUE EN EL DÍA DE LA EVALUACIÓN NOS LA DEN. PERO PARA PRACTICAR ES NECESARIO CREARLA.

import Cliente from "../Models/clientes.js"

const crearBaseDeDatosClientes = async () => {

    try {

        // VERIFICAMOS QUE LA TABLA NO EXISTA...

        const tablaExiste = await sequelize.getQueryInterface().showAllTables();
        const tablaClientesCreada = tablaExiste.includes('CLIENTES');


        if (!tablaClientesCreada) {

            await sequelize.sync();
            await Cliente.bulkCreate([

                // Como el idCliente es AUTOINCREMENTAL, no hace falta especificarlo...
                // Si lo hacemos, rompemos con una regla de unicidad de la PK.

                { nombre: 'Dean', apellido: 'Swalough', fechaAfiliacion: '2023-07-13', premium: true },
                { nombre: 'Veronica', apellido: 'Wombwell', fechaAfiliacion: '2023-05-28', premium: false },
                { nombre: 'Keene', apellido: 'Breche', fechaAfiliacion: '2023-09-17', premium: false },
                { nombre: 'Kasper', apellido: 'Kettlewell', fechaAfiliacion: '2023-09-17', premium: true },
                { nombre: 'Zabrina', apellido: 'Burnhill', fechaAfiliacion: '2023-11-16', premium: true },
                { nombre: 'Noellyn', apellido: 'Kindle', fechaAfiliacion: '2023-10-09', premium: false },
                { nombre: 'Alec', apellido: 'Shilleto', fechaAfiliacion: '2023-10-21', premium: true },
                { nombre: 'Marley', apellido: 'Castane', fechaAfiliacion: '2023-11-18', premium: false },
                { nombre: 'Cissy', apellido: 'Brunton', fechaAfiliacion: '2023-11-23', premium: false },
                { nombre: 'Sindee', apellido: 'Callendar', fechaAfiliacion: '2023-05-19', premium: false },
                { nombre: 'Benny', apellido: 'Keyme', fechaAfiliacion: '2023-10-06', premium: false },
                { nombre: 'Vanessa', apellido: 'Broose', fechaAfiliacion: '2023-11-22', premium: false },
                { nombre: 'Gary', apellido: 'Pariso', fechaAfiliacion: '2023-06-26', premium: false },
                { nombre: 'Norris', apellido: 'Mariet', fechaAfiliacion: '2024-02-25', premium: false },
                { nombre: 'Marya', apellido: 'Tout', fechaAfiliacion: '2024-03-27', premium: true },
                { nombre: 'Ondrea', apellido: 'Snazel', fechaAfiliacion: '2024-03-08', premium: false },
                { nombre: 'Brandyn', apellido: 'Yurocjkin', fechaAfiliacion: '2023-07-21', premium: true },
                { nombre: 'Buddy', apellido: 'Sandaver', fechaAfiliacion: '2023-05-04', premium: false },
                { nombre: 'Goran', apellido: 'Brooking', fechaAfiliacion: '2023-05-08', premium: false },
                { nombre: 'Mollee', apellido: 'Jepensen', fechaAfiliacion: '2023-05-08', premium: false }
            ]);

        }

        console.log("Base de Datos CLIENTES creada EXITOSAMENTE");

    } catch ( error ) {

        console.log("BBDD no pudo ser creada, error: " + error);

    }

}

export default crearBaseDeDatosClientes;