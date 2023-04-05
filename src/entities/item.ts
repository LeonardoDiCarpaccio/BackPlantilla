import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { command } from "./command";

@Entity()
export class item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  size: String;

  @Column({ nullable: false })
  correction: string;

  ///SECCION ANTEPIE

  @Column({ nullable: true })
  oliva_BarraMetatarsal: string;

  @Column({ nullable: true })
  descargaAntepie: string;

  @Column({ nullable: true })
  rai: string;

  @Column({ nullable: true })
  rae: string;

  ///SECCION PIE MEDIO
  @Column({ nullable: true })
  arco: string;
  @Column({ nullable: true })
  contraArco: string;
  @Column({ nullable: true })
  price: string;

  // SECCION RETROPIE/TALON
  @Column({ nullable: true })
  alsa: string;
  @Column({ nullable: true })
  alcochadaOEspolon: string;

  @Column({ nullable: true })
  rpi: string;

  @Column({ nullable: true })
  rpe: string;

  @Column({ nullable: true })
  raex: string;

  //SECCION OPTION MAS

  @Column({ nullable: true })
  clinica: string;

  @Column({ nullable: true })
  talonera: string;
}
