import { MigrationInterface, QueryRunner, Table, TableUnique } from 'typeorm';

export class CriarTabelaExames1622071541135 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exames',
        columns: [
          {
            name: 'id_exame',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'data_realizacao',
            type: 'timestamp without time zone',
            isNullable: false,
          },

          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
          },

          {
            name: 'type',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'status',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'hipotese',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'image',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'report',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'report_status',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },

          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createUniqueConstraint(
      'exames',
      new TableUnique({
        columnNames: ['id_exame'],
        name: 'unique_id_exame',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    await queryRunner.dropTable('exames');
  }
}
