// Regra de negócio

import {getCustomRepository, Repository} from 'typeorm'
import {SettingsRepository} from '../repositories/SettingsRepository'
import { Setting} from "../entities/Setting"


interface iSettingsCreate{
chat: boolean;
username:string;
}


class SettingsService {
    private settingsRepository: Repository<Setting> 
    
    constructor(){
    this.settingsRepository=getCustomRepository(SettingsRepository)
    }
    async create({chat, username}:iSettingsCreate) {


        //select * from settings where username =  "username" limit 1;
        const userAlredyExists = await this.settingsRepository.findOne({
               username,
            });
            if(userAlredyExists){
                throw new Error("Usuario ja existe !/ Iser alredy exists")
            }

        
        const settings = this.settingsRepository.create({
            chat,
            username
        })

        await this.settingsRepository.save(settings);
        return settings
    }
}

export { SettingsService }