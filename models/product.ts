import { DataTypes, Model } from 'sequelize';
import sequelize from "../database/connection";

class Product extends Model {
    public id!: number;
    public name!: string;
    public price!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Product',
    }
);

export default Product;