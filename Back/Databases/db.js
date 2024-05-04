// Importamos el módulo de Sequelieze de nuestra dependencia del package.json.

import Sequelize from "sequelize";

// Creamos una instancia de Sequelieze a través de su constructor, para exportar.

const sequelize = new Sequelize(
    {
        dialect: "sqlite",
        storage: "./Back/Databases/db.sqlite"
    }
);

// Procedemos a exportar el objeto que iniciará la BBDD.

export default sequelize;