import { Request, Response } from "express"

export const getProducts = (_req: Request, res: Response) => {

    res.status(200).json({ message: 'PING' })
}