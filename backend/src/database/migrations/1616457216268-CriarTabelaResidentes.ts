import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CriarTabelaResidentes1616457216268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'residentes',
        columns: [
          {
            name: 'id_residente',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'ano_residencia',
            type: 'numeric',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'residentes',
      new TableForeignKey({
        name: 'fk_residente_medico',
        columnNames: ['id_residente'],
        referencedColumnNames: ['id_medico'],
        referencedTableName: 'medicos',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('residentes');
  }
}
