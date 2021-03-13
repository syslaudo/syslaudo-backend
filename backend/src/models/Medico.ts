import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Usuario from './Usuario';

@Entity('medicos')
class Medico {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    crm: string;

    @Column()
    ativo: boolean;

    @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario

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