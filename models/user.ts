import { DataTypes, Model } from 'sequelize';
import sequelize from "../database/connection";
import order from "./orders";

interface User {
    user_firstname: string;
    user_lastname: string;
    user_email: string;
    user_password: string;
}

interface UserModel extends Model<User>, User { }

const user = sequelize.define<UserModel>('user', {
    user_firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

user.hasMany(order);
order.belongsTo(user, {
    as: 'dudd'
});

export default user;