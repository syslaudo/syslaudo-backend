import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
// import Usuario from './Usuario';
import Pedido from './Pedido';

@Entity('medicos')
class Medico {
  @PrimaryGeneratedColumn('uuid')
  id_medico: string;

  @Column()
  crm: string;

  @Column()
  ativo: boolean;

  @Column()
  id: string;

  @Column()
  cpf: string;

  // @OneToOne(() => Usuario)
  // @JoinColumn()
  // usuario: Usuario;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Pedido, (pedido) => pedido.medico) pedidos: Pedido[];

  constructor() {
    if (!this.id_medico) {
      this.id_medico = uuid();
    }
  }
}

export default Medico;
