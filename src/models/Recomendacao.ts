import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('recomendacoes')
class Recomendacao {
  @PrimaryGeneratedColumn('uuid')
  id_recomendacao: string;

  @Column()
  exame: string;

  @Column()
  recomendacao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id_recomendacao) {
      this.id_recomendacao = uuid();
    }
  }
}

export default Recomendacao;
