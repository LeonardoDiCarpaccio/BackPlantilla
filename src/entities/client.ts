import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

 


    

}