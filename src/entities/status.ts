import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { command } from "./command";

@Entity()
export class status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
