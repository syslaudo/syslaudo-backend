import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('recomendacoes')
class Recomendacao {
  @PrimaryGeneratedColumn('uuid')
  id_recomendacao: string;

  @Column()
  exame: string;

  @Column()
  recomendacao: string;

  constructor() {
    if (!this.id_recomendacao) {
      this.id_recomendacao = uuid();
    }
  }
}

export default Recomendacao;
