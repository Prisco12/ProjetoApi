import { ProductServices } from "./product.service";
import { Request, Response } from 'express'


class ProductController{
    async create(req: Request, res: Response) {
        const createdController = await new ProductServices().create(req.body)

        return res.status(200).json(createdController)
    }

    async list (req: Request, res: Response) {
        const list = await new ProductServices().list(req.body)

        return res.status(201).json(list)
    }

    async read(req: Request, res: Response) {
        const list = await new ProductServices().readList()

        return res.status(201).json(list)
    }
}
 

export default new ProductController()