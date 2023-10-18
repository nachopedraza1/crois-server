import { Request, Response } from "express";
import Order from "../models/orders";
import OrderProduct from "../models/orderItems";
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response) => {

  const { userId } = req.body;

  if (!userId) return res.status(400).json({ message: 'No hay usuario' });


  try {

    const orders = await Order.findAll({
      where: { userId },
      include: [
        {
          model: Product,
          through: { attributes: ['quantity'] }
        }
      ]
    });

    if (orders.length === 0) return res.status(400).json({ message: 'No hay ordenes.' });

    const formattedOrders = orders.map(order => ({
      id: order.id,
      userId: order.userId,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      Products: order.Products!.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        quantity: product.OrderProducts.dataValues.quantity
      })),
    }));

    return res.status(200).json(formattedOrders);

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Algo salio mal, revisar logs del servidor.' });
  }

}

export const createProduct = async (req: Request, res: Response) => {

  const { userId, products } = req.body

  if (!userId) return res.status(400).json({ message: 'No hay usuario' });
  if (!products) return res.status(400).json({ message: 'No hay productos en el carrito' });

  try {
    const newOrder = await Order.create({ userId });

    for (const product of products) {
      await OrderProduct.create({
        orderId: newOrder.id,
        quantity: product.quantity,
        productId: product.id
      });
    }


    return res.status(200).json({ message: 'Orden creada con éxito.' });

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'La creación de la orden falló.' });
  }
}



/*await User.create({ name: 'Juan ignacio pedraza', email: 'nachopedraza123@google.com', password: '123456' });
  await User.create({ name: 'Edu Castro', email: 'educastro@google.com', password: '123456' });
  await User.create({ name: 'Carola loca', email: 'carolaloca@google.com', password: '123456' });

  await Product.create({ name: 'notebook', price: 450 });
  await Product.create({ name: 'monitor', price: 230 });
  await Product.create({ name: 'mouse', price: 340 });
  await Product.create({ name: 'teclado', price: 150 }); */
