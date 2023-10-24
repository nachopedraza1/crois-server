import { Request, Response } from "express";
import Order from "../models/orders";
import Product from "../models/product";



export const getOrders = async (_req: Request, res: Response) => {

    const orders = await Order.findAll({
        include: [{
            model: Product,
            through: { attributes: ['quantity'] }
        }]
    })

    return res.status(200).json({ orders })
}


export const createOrder = async (_req: Request, res: Response) => {


    return res.status(200).json({ message: 'Ok' })
}