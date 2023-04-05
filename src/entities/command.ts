import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { client } from "./client";
import { item } from "./item";
import { patient } from "./patient";
import { status } from "./status";

@Entity()
export class command {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  clientId: number;

  @Column({ default: 1 })
  statusId: number;

  @Column({ nullable: true })
  creationDateDisplay: String;
  @Column({ nullable: true })
  finishDateDisplay: String;
  @Column({ nullable: false })
  price: number;

  @ManyToOne(() => client, (client) => client.id, {
    nullable: false,
    cascade: true,
    onDelete: "CASCADE",
  })
  //entitie command can have only one client and a client can have different command with client.id beeing the foreing key
  //cannot be null and if a client is delete all his projet related are deleted too
  @JoinColumn({ name: "clientId" })
  client: client;
  //JoinColum permit to iniate client.id has the column with want has foreign key

  @ManyToMany(() => patient, { cascade: true })
  @JoinTable()
  patient: patient[];

  @ManyToOne(() => status, (status) => status.id, {
    nullable: false,
    cascade: true,
  })
  //entitie command can have only one status and a status can have different command with status.id beeing the foreing key
  //cannot be null and if a role is delete all his projet related are deleted too
  @JoinColumn({ name: "statusId" })
  status: status;
  //JoinColum permit to iniate role.id has the column with want has foreign key

  // @OneToMany(() => patient, (patient) => patient.id, {
  //   nullable: false,
  //   cascade: true,
  // })
  // @JoinColumn({ name: "patientId" })
  // patient: patient;
}
