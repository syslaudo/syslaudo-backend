import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('pacientes')
class Paciente {
  @PrimaryGeneratedColumn('uuid')
  id_paciente: string;

  @Column()
  nome_paciente: string;

  @Column()
  cpf: string;

  @Column()
  sexo_paciente: string;

  @Column()
  cor_paciente: string;

  @Column()
  datanasc_paciente: Date;

  @Column()
  aguarda_realizacao: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id_paciente) {
      this.id_paciente = uuid();
    }
  }
}

export default Paciente;
