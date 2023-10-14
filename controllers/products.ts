import { Request, Response } from "express"
import Orden from "../models/order";
import Producto from "../models/product";


export const getProducts = (_req: Request, res: Response) => {

    res.status(200).json({ message: 'PING' })
}

export const createProduct = async (_req: Request, res: Response) => {


    // ID del usuario que realiza la orden
    const productos = [
        { id: 1, OrdenProducto: { cantidad: 3 } },
        { id: 2, OrdenProducto: { cantidad: 2 } },
        // Agrega más productos y cantidades según sea necesario
    ];

    Orden.create(
        {
            fecha: new Date(), // Fecha de la orden (ajusta según sea necesario)
            UsuarioId: 1, // Asocia la orden con el usuario
            Productos: productos, // Asocia los productos con la orden y establece las cantidades
        },
        {
            include: Producto, // Incluye la relación Producto
        }
    );

    return res.status(200).json({
        /*      product1,
             product2 */
    })
}