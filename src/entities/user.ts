import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { role } from "./role";

@Entity()
export class user {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(()=>role)
    @JoinTable()
    role : role[]
    

 


    

}