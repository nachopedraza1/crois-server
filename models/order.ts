import { DataTypes } from "sequelize";
import db from "../database/connection";


const Orden = db.define('Ordenes', {
    fecha: {
        type: DataTypes.DATE,
    },
});


export default Orden;