import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";


interface InstallmentsAttributes {
    id?: number;
    quantity: number;
    amount: number;
    rate: number;
    productId: number;
}

class Installments extends Model<InstallmentsAttributes> {
    public id!: number;
    public quantity!: number;
    public amount!: number;
    public rate!: number;
    public productId!: number;

    public readonly createdAt!: Date;
    public readonly upadtedAt!: Date;
}

Installments.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Installments',
    tableName: 'Installments',
})


export default Installments;