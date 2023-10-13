import { DataTypes } from 'sequelize';
import db from '../database/connection';

const Product = db.define('Product', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
})

export default Product;