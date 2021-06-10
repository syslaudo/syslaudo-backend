import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('exames')
class Exame {
  @PrimaryGeneratedColumn('uuid')
  id_exame: string;

  @Column()
  data_realizacao: Date;

  @Column()
  cpf: string;

  @Column()
  type: string;

  @Column()
  status: string;

  @Column()
  hipotese: string;

  @Column()
  image: string;

  @Column()
  report: string;

  @Column()
  report_status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id_exame) {
      this.id_exame = uuid();
    }
  }
}

export default Exame;
