import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { client } from "./client";

@Entity()
export class role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
