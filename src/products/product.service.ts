import { ProductType } from "./types/types";
import ProductModel from "./product.schema"
import { readFile, writeFile } from "fs/promises";

export class ProductServices {
    async create(product: ProductType){
        const createdProduct = await ProductModel.create(product)

        return createdProduct
    }

    async list (product: ProductType) {
        await writeFile('product.json', JSON.stringify(product, null, 2))
    }

    async readList() {
        const list = JSON.parse(await readFile('product.json','utf-8'))

        return list
    }
}
