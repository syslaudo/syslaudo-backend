import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome_usuario: string;

  @Column()
  email_usuario: string;

  @Column()
  senha: string;

  @Column()
  funcao:string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export default Usuario;