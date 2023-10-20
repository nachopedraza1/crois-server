import { DataTypes, Model } from "sequelize";
import sequelize from '../database/connection';
import Rating from "./ratings";
import Installments from "./installments";


interface ProductsAttributes {
    id?: number;
    meli_id: string;
    name: string;
    price: number;
    condition: string;
    thumbnail: string;
    thumbnail_id: string;
    totalSold: number;
    brand: string;
    category: string;
}

class Product extends Model<ProductsAttributes> {
    public id!: number;
    public meli_id!: string;
    public name!: string;
    public price!: number;
    public condition!: string;
    public thumbnail!: string;
    public thumbnail_id!: string;
    public totalSold!: number;
    public brand!: string;
    public category!: string;

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
        meli_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        thumbnail_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalSold: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Products',
        tableName: 'Products'
    }
);

Product.hasOne(Rating, { foreignKey: 'productId' });
Product.hasOne(Installments, { foreignKey: 'productId' });

export default Product;