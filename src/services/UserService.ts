import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"



class UserSerivece{
    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email:string){
        
        // Verificar se o usuario existe
        const userExists = await this.usersRepository.findOne({
            email
        }) 

        // Se existir retorna o user
        if (userExists){
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        })// 

        await this.usersRepository.save(user);
        // Se não existir, salvar no DB
        return user;
    }
}
export {UserSerivece}