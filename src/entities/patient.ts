import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { item } from "./item";

@Entity()
export class patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @Column()
  patientFirstName: string;

  @ManyToMany(() => item, { cascade: true })
  @JoinTable()
  item: item[];
}
