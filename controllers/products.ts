import { Request, Response } from "express";


export const getProducts = (_req: Request, res: Response) => {

    res.status(200).json({ message: 'PING' })
}

export const createProduct = async (_req: Request, res: Response) => {


    await Product.create({ name: 'Producto1', price: 10 });
    await Product.create({ name: 'Producto2', price: 20 });
    await Product.create({ name: 'Producto3', price: 30 });
    // Supongamos que tienes un usuario y productos ya definidos en tu base de datos
    const userId = 2; // ID del usuario
    const productIds = [1, 2]; // IDs de los productos que quieres agregar a la orden
    const quantities = [2, 3]; // Cantidad de cada producto en la orden

    // Crear una instancia de Orden
    const ordes = await Order.create({ userId });

    // Agregar productos a la orden con sus cantidades
    for (let i = 0; i < productIds.length; i++) {
        const productId = productIds[i];
        const quantity = quantities[i];

        await OrderProduct.create({ orderId: ordes.id, productId, quantity });
    }
    return res.status(200).json({
        /*      product1,
             product2 */
    })
}