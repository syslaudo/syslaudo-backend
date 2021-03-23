import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Pedido from './Pedido';

@Entity('exames')
class Exame {
    @PrimaryGeneratedColumn('uuid')
    id_exame: string;

    @Column()
    data_realizacao: Date;

    @Column()
    hora_realizacao: Date;

    @Column()
    laudo_medico: string;

    @Column()
    tipo_exame: string;

    @Column()
    imagem_exame: string;

    @Column()
    laudo_aprovado: boolean;

    @OneToOne(type => Pedido) @JoinColumn() 
    pedido: Pedido;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id_exame) {
          this.id_exame = uuid();
        }
      }
}

export default Exame;