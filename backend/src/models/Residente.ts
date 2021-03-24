import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Medico from './Medico';

@Entity('residentes')
class Residente {
  @PrimaryGeneratedColumn('uuid')
  id_residente: string;

  @Column()
  ano_residencia: Number;

  @OneToOne(() => Medico)
  @JoinColumn({
    name: "id_medico",
    referencedColumnName: "id_medico"
  })
  medico: Medico

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id_residente) {
      this.id_residente = uuid();
    }
  }
}

export default Residente;