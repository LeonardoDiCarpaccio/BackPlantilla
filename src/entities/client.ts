import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { role } from "./role";

@Entity()
export class client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  clientFirstName: string;

  @Column()
  orga: string;

  @Column()
  mail: string;

  @Column()
  price: number;

  @Column()
  phone: number;

  @Column()
  location: string;

  @Column()
  account: number;

  @Column({ default: 2 })
  roleId: number;

  @Column({ nullable: true })
  password: string;

  @ManyToOne(() => role, (role) => role.id, {
    nullable: false,
    cascade: true,
    onDelete: "CASCADE",
  })
  //entitie client can have only one role and a role can have different client with role.id beeing the foreing key
  //cannot be null and if a role is delete all his projet related are deleted too
  @JoinColumn({ name: "roleId" })
  role: role;
  //JoinColum permit to iniate role.id has the column with want has foreign key
}
