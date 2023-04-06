import {Request, Response} from 'express'
import { UserService } from './user.service'
import { readFile, writeFile } from 'fs'

class UserController {
    async create (req: Request, res: Response){
        const user = await new UserService().create(req.body)

        return res.status(200).json(user)
    }
    

    async list (req: Request, res: Response){
        const listUser =  await new UserService().list(req.body)

        return res.status(201).json(listUser)
    }

    async readList (req: Request, res: Response){
        const listUser =  await new UserService().readList()

        return res.status(201).json(listUser)
    }
    
    
}

export default new UserController()