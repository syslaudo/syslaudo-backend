import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Pedido from './Pedido';

@Entity('recomendacoes')
class Recomendacao {
    @PrimaryGeneratedColumn('uuid')
    id_recomendacao: string;

    @Column()
    recomendacao_escrita: string;

    @ManyToOne(type => Pedido, pedido => pedido.recomendacoes) pedido: Pedido;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id_recomendacao) {
          this.id_recomendacao = uuid();
        }
      }
}

export default Recomendacao;