import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

interface Ratings {
    negative: number;
    neutral: number;
    positive: number;
    productId: number;
}
class Rating extends Model<Ratings> {
    public negative!: number;
    public neutral!: number;
    public positive!: number;
    public productId!: number;

    public readonly createdAt!: Date;
    public readonly upadtedAt!: Date;
}

Rating.init({
    negative: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    neutral: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    positive: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Rating',
    tableName: 'Rating',
});


export default Rating;


