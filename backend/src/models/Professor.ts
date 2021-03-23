import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Medico from './Medico';

@Entity('professores')
class Professor {
    @PrimaryGeneratedColumn('uuid')
    id_professor: string;

    @Column()
    titulacao: string

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
        if(!this.id_professor) {
          this.id_professor = uuid();
        }
      }
}

export default Professor;