import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Pedido from './Pedido';

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

  @OneToMany((type) => Pedido, (pedido) => pedido.paciente) pedidos: Pedido[];

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
