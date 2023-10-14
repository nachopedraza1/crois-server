import { DataTypes } from "sequelize";
import db from "../database/connection";


const Usuario = db.define('Usuario', {
    nombre: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // Otras propiedades del usuario
});

export default Usuario;