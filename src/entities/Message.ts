import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import {v4 as uuid} from "uuid"
import { User } from "./User";

@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;
    
    @JoinColumn({name:"user_id"})//definimos com quem ele ta fazendo um "join com que coluna"
    @ManyToOne(()=>User) // Muitas mensagens para 1 usuario e do tipo ()=> User == a tipo usuario 
    user: User;

    @Column()// ele vai funcionar como uma coluna porém ele vai ser verificado pelo DB se o id existe dentro no DB
    user_id: string;

    @CreateDateColumn()
    created_at: Date;
    constructor() {

        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Message }