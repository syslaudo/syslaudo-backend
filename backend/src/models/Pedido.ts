import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Exame from './Exame';
import Medico from './Medico';
import Paciente from './Paciente';
import Recomendacao from './Recomendacao';

@Entity('pedidos')
class Pedido {
  @PrimaryGeneratedColumn('uuid')
  id_pedido: string;

  @Column()
  nome_exame: string;

  @Column()
  data_prevista: Date;

  @Column()
  hipotese_diagnostico: string;

  @Column()
  aguarda_realizacao: boolean;

  @ManyToOne(type => Medico, medico => medico.pedidos) medico: Medico;

  @ManyToOne(type => Paciente, paciente => paciente.pedidos) paciente: Paciente;

  @OneToMany(type => Recomendacao, recomendacao => recomendacao.pedido) recomendacoes: Recomendacao[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id_pedido) {
      this.id_pedido = uuid();
    }
  }
}

export default Pedido;