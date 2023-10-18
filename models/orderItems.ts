import { DataTypes, Model } from "sequelize";
import sequelize from '../database/connection';


interface OrderProductAttributes {
    id?: number;
    quantity: number;
    orderId?: number;
    productId?: number;
}

class OrderProduct extends Model<OrderProductAttributes>{
    public id!: number;
    public quantity!: number;
    public orderId!: number;
    public productId!: number;

    public readonly createdAt!: Date;
    public readonly upadtedAt!: Date;
}

OrderProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'OrderProducts',
        tableName: 'OrderProducts'
    }
);

export default OrderProduct;