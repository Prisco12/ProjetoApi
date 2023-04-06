import {Router} from 'express'
import userController from './users/user.controller'
import ProductController  from './products/product.controller'

const routes = Router()
routes.post('/users',userController.create)
routes.post('/users_list',userController.list)
routes.get('/users_list',userController.readList)

routes.post('/product', ProductController.create)
routes.post('/product_list', ProductController.list)
routes.get('/product_list', ProductController.read)

export default routes