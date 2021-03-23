import { Column, Entity, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Usuario from './Usuario';
import Pedido from './Pedido';

@Entity('medicos')
class Medico {
    @PrimaryGeneratedColumn('uuid')
    id_medico: string;

    @Column()
    crm: string;

    @Column()
    ativo: boolean;

    @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario

    @OneToMany(type => Pedido, pedido => pedido.medico) pedidos: Pedido[];

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id_medico) {
          this.id_medico = uuid();
        }
      }
}

export default Medico;