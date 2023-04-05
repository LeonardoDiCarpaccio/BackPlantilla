import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { client } from "./client";

@Entity()
export class price_type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  Conffeccion: string;

  @Column()
  description: string;

  @Column()
  price: string;
}
