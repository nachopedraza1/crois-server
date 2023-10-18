import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

interface UserAttributes {
    id?: number;
    name: string;
    email: string;
    password: string;
}

class User extends Model<UserAttributes> {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly upadtedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Users',
        tableName: 'Users',
    }
);

export default User;