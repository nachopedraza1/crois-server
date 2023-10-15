import { Model } from "sequelize";
import sequelize from "../database/connection";

interface Order {
    id?: number;
    userId?: number;
}

const order = sequelize.define<Model<Order>>('order', {

});

export default order;