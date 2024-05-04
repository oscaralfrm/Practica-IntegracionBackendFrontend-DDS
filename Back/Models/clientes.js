// Éste es nuestro código relacionado al Modelo/Entidad de Clientes, deberemos hacer una serie de operaciones o líneas de código para tratarlo y que podamos guardar satisfactoriamente los datos de ello.

// Primer paso: Importamos nuestro objeto "sequelize", que tenemos en "db.js";

import sequelize from "../Databases/db.js"

import DataTypes from "sequelize";

// Segundo paso: Empezamos a definir nuestra entidad Cliente con el método .define() del objeto importado sequelize.

const Cliente = sequelize.define("CLIENTES", // Nombre de la Tabla

// Acá van los { atributos }; recordar que la sintaxis es nombreAtributo: { configuracionesAtributo }
// Haremos que nuestro Cliente tenga los siguientes atributos:
// { idCliente, nombre, apellido, fechaAfiliacion, premium }

{
    idCliente: {
        type: DataTypes.INTEGER, // Mi iDCliente será de tipo ENTERO
        primaryKey: true, // Quiero que sea la PK de mi Tabla "CLIENTES"
        autoIncrement: true, // Quiero que sea autoincremental
        field: "ID_CLIENTE",
        unique: true // Es el nombre que tendrá el atributo idCliente en la Tabla "CLIENTES",
    },
    nombre: {
        type: DataTypes.STRING(100), // Quiero que éste atributo sea un STRING de hasta 100 carácteres
        allowNull: false, // NO LE PERMITO QUE ESTÉ VACÍO EN MI BBDD
        field: "NOMBRE_CLIENTE" // Es el nombre que tendrá el atributo nombre en la Tabla "CLIENTES"
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "APELLIDO_CLIENTE"
    },
    fechaAfiliacion: {
        type: DataTypes.DATEONLY, // DATEONLY sólo fechas, o DATE que es fecha y hora.
        allowNull: false,
        field: "FECHA_AFILIACION"
    },
    premium: {
        type: DataTypes.BOOLEAN, // Valor de tipo BOOLEANO, si es PREMIUM === TRUE, sino, PREMIUM === FALSE
        allowNull: false,
        field: "ES_CLIENTE_PREMIUM"
    }
},

// Acá van las { opciones }; recordar que la sintaxis es nombreOpcion: { configuracionesOpcion }

{
    "timestamps": false, // NO QUEREMOS ATRIBUTOS AUTOGENERADOS DE TIEMPO DE CREACIÓN
    "tableName": "CLIENTES" // QUEREMOS FORZAR A QUE LA TABLA SE LLAME CLIENTES EN LA BBDD
});

export default Cliente;