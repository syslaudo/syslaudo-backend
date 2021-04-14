import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome_do_usuario: string;

  @Column()
  email_usuario: string;

  @Column()
  senha: string;

  @Column()
  tipo: string;

  @Column()
  cpf: string;

  @Column()
  crm: string;

  @Column()
  titulacao: string;

  @Column()
  data_residencia: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashpassword() {
    this.senha = bcrypt.hashSync(this.senha, 8);
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Usuario;
