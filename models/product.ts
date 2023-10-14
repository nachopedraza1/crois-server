import { DataTypes } from "sequelize";
import db from "../database/connection";

const Producto = db.define('Producto', {
    nombre: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    // Otras propiedades del producto
});


export default Producto;