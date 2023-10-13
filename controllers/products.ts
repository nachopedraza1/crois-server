import { Request, Response } from "express"
import Product from '../models/product';

export const getProducts = (_req: Request, res: Response) => {

    res.status(200).json({ message: 'PING' })
}

export const createProduct = async (_req: Request, res: Response) => {

    /* const { product } = req.body; */

    const newProduct = await Product.create({
        title: 'PC',
        price: 10000
    })

    console.log('Product creado:', newProduct.toJSON());

    return res.status(200).json({ newProduct })
}