import { Request, Response } from "express";
import Order from "../models/orders";
import OrderProduct from "../models/orderItems";


export const getProducts = (_req: Request, res: Response) => {

    res.status(200).json({ message: 'PING' })
}

export const createProduct = async (_req: Request, res: Response) => {

    const newOrder = await Order.create({ userId: 1 });
    await OrderProduct.create({ orderId: newOrder.id, productId: 2, quantity: 3 });
    await OrderProduct.create({ orderId: newOrder.id, productId: 1, quantity: 2 })

    return res.status(200).json({
        /*      product1,
             product2 */
    })
}

/*   // Crear un usuarios y productos
  await User.create({ name: 'Usuario1' });
    await User.create({ name: 'Usuario2' });
    await User.create({ name: 'Usuario3' });
    await User.create({ name: 'Usuario4' });
    await Product.create({ name: 'Producto 1', price: 10 });
    await Product.create({ name: 'Producto 2', price: 20 });
    await Product.create({ name: 'Producto 3', price: 30 });
    await Product.create({ name: 'Producto 4', price: 40 });

  // Crear una orden
  const order = await Order.create({ userId: user.id });

  // Crear registros en la tabla intermedia (OrderProduct)
  await OrderProduct.create({ orderId: order.id, productId: product1.id, quantity: 2 });
  await OrderProduct.create({ orderId: order.id, productId: product2.id, quantity: 3 }); */


