export interface IOrder {
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    Products: IProduct[];
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;    
    updatedAt: Date;
    OrderProducts: {
        dataValues: { quantity: number }
    }
}