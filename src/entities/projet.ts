import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { client } from "./client";

@Entity()
export class projet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    clientId : number;

    @ManyToOne(()=>client, client => client.id,{nullable : false,cascade : true, onDelete : "CASCADE"})
    @JoinColumn({name : "clientId"})
    client : client


}