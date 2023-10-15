import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

interface OrderItem {
    quantity: number;
    orderId?: number;
    productId?: number;
}

const orderItems = sequelize.define<Model<OrderItem>>('orderItems', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

export default orderItems;