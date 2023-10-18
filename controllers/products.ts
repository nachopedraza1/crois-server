import { Request, Response } from "express";
import Order from "../models/orderItems";
import Product from "../models/product";
import User from "../models/user";
import OrderProduct from "../models/orderItems";

export const getProducts = async (_req: Request, res: Response) => {

  res.status(200).json({})
}

export const createProduct = async (_req: Request, res: Response) => {

  Order
  Product
  User
  OrderProduct

  return res.status(200).json({})
}
