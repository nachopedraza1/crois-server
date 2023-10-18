import { DataTypes, Model } from "sequelize";
import sequelize from '../database/connection';


interface OrderProductAttributes {
    id?: number;
    quantity: number;
}

class OrderProduct extends Model<OrderProductAttributes>{
    public id!: number;
    public quantity!: number;

    public readonly createdAt!: Date;
    public readonly upadtedAt!: Date;
}

OrderProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'OrdersProducts',
        tableName: 'OrdersProducts'
    }
);

export default OrderProduct;