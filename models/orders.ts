import { DataTypes, Model } from "sequelize";
import sequelize from '../database/connection';
import User from "./user";
import Product from "./product";
import { IProduct } from "../interfaces";

interface OrdersAttributes {
    id?: number;
    userId: number;
    Products?: IProduct[]
}

class Order extends Model<OrdersAttributes> {
    public id!: number;
    public userId!: number;
    public Products?: IProduct[]
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Orders',
        tableName: 'Orders'
    }
);

Order.belongsTo(User, { foreignKey: 'userId' });

Order.belongsToMany(Product, {
    through: 'OrderProducts',
    foreignKey: 'orderId',
    otherKey: 'productId',
});


export default Order;