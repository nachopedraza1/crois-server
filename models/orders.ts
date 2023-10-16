import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection'; // Asegúrate de importar tu instancia Sequelize
import Product from './product';
import User from './user';

class Order extends Model {
    public id!: number;
    public userId!: number;

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
        modelName: 'Order',
    }
);

// Definir la relación entre Orden y Usuario
Order.belongsTo(User, { foreignKey: 'userId' });

// Definir la relación entre Orden y Producto (muchos a muchos con cantidad)
Order.belongsToMany(Product, {
    through: 'OrderProduct',
    foreignKey: 'orderId',
    otherKey: 'productId',
});

export default Order;