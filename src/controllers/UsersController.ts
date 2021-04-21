
import {Request,Response} from 'express'
import { UserSerivece } from '../services/UserService'


class UsersController{

    async create(request:Request,response:Response):Promise<Response>{
        const {email} = request.body;
        
        const userSerivece =  new UserSerivece();
        
        const user = await userSerivece.create(email);

        return response.json(user)
    }
}
export {UsersController}