import { DataTypes, Model } from "sequelize";
import sequelize from '../database/connection';


interface ProductsAttributes {
    id?: number;
    name: string;
    price: number;
}

class Product extends Model<ProductsAttributes> {
    public id!: number;
    public name!: string;
    public price!: number;

    public readonly createdAt!: Date;
    public readonly upadtedAt!: Date;
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
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Products',
        tableName: 'Products'
    }
);

export default Product;