import axios from "axios";
import { Request, Response } from "express";
import { MeliResponse } from "../interfaces/mercadoLibre";

import Product from "../models/product";
import Rating from "../models/ratings";
import Installments from "../models/installments";


export const getProducts = async (_req: Request, res: Response) => {

  const products = await Product.findAll({
    limit: 10,
    include: [
      { model: Rating },
      { model: Installments }
    ]
  })


  return res.status(200).json({ products });
}

export const createProduct = async (_req: Request, res: Response) => {

  const { data } = await axios.get<MeliResponse>('https://api.mercadolibre.com/sites/MLA/search?q=fundas iphone ringke&limit=30');

  const products = data.results.map(product => ({
    meli_id: product.id,
    name: product.title,
    price: product.price,
    condition: product.condition,
    thumbnail: product.thumbnail,
    thumbnail_id: product.thumbnail_id,
    totalSold: product.seller.seller_reputation.transactions.completed,
    brand: product.attributes.find(att => att.id === 'BRAND')?.value_name || '',
    category: 'fundas',
    ratings: product.seller.seller_reputation.transactions.ratings,
    installments: product.installments,
  }));

  for (const product of products) {
    try {

      const exist = await Product.findOne({ where: { name: product.name } })

      if (exist) {
        console.log('El producto ya existe');
      }

      if (!exist) {

        const newProduct = await Product.create({ ...product })
        await Rating.create({
          productId: newProduct.id,
          negative: product.ratings.negative,
          neutral: product.ratings.neutral,
          positive: product.ratings.positive
        });
        await Installments.create({
          productId: newProduct.id,
          amount: product.installments.amount,
          quantity: product.installments.quantity,
          rate: product.installments.rate,
        })
        console.log('Producto creado con éxito.');
      }

    } catch (error) {
      console.log(error);
      return;
    }
  }

  return res.status(200).json({ products });

}
