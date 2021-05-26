import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CriarTabelaRecomendacoes1622071125604
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'recomendacoes',
        columns: [
          {
            name: 'id_recomendacao',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'exame',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'recomendacao',
            type: 'timestamp without time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    await queryRunner.dropTable('recomendacoes');
  }
}
