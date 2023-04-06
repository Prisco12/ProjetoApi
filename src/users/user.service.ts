import { Usertype } from "./types/types";
import UserModel from "./user.schema"
import { readFile, writeFile } from 'fs/promises'


export class  UserService { 
    async create (user: Usertype){
        const createdUser = await UserModel.create(user)

        return createdUser
    }

    async list (data: Usertype){
        await writeFile('users.json', JSON.stringify(data, null, 2))    
    }

    async readList (){

        try {
            const userList = await readFile('users.json','utf-8')

            return JSON.parse(userList)

        } catch (error) {
            throw new Error("Erro ao ler lista de usuarios")
        }
        

       
    }
}