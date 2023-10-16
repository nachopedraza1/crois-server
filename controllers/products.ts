import { Request, Response } from "express";
import Order from "../models/orders";
import OrderProduct from "../models/orderItems";


export const getProducts = (_req: Request, res: Response) => {

    res.status(200).json({ message: 'PING' })
}

export const createProduct = async (_req: Request, res: Response) => {



    // Crear una orden
    const order = await Order.create({ userId: 1 });

    // Crear registros en la tabla intermedia (OrderProduct)
    await OrderProduct.create({ orderId: order.id, productId: 1, quantity: 4 });
    await OrderProduct.create({ orderId: order.id, productId: 1, quantity: 4 });

    return res.status(200).json({
        /*      product1,
             product2 */
    })
}

/*   // Crear un usuario
  const user = await User.create({ name: 'Usuario Ejemplo' });

  // Crear productos
  const product1 = await Product.create({ name: 'Producto 1', price: 10 });
  const product2 = await Product.create({ name: 'Producto 2', price: 20 });

  // Crear una orden
  const order = await Order.create({ userId: user.id });

  // Crear registros en la tabla intermedia (OrderProduct)
  await OrderProduct.create({ orderId: order.id, productId: product1.id, quantity: 2 });
  await OrderProduct.create({ orderId: order.id, productId: product2.id, quantity: 3 }); */


