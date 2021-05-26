import { MigrationInterface, QueryRunner, Table, TableUnique } from 'typeorm';

export class CriarTabelaPacietes1622070522651 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'pacientes',
        columns: [
          {
            name: 'id_paciente',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'nome_paciente',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },

          {
            name: 'sexo_paciente',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'cor_paciente',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'aguarda_realizacao',
            type: 'boolean',
            isNullable: true,
          },

          {
            name: 'datanasc_paciente',
            type: 'timestamp without time zone',
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
      'pacientes',
      new TableUnique({
        columnNames: ['id_paciente'],
        name: 'unique_id_paciente',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    await queryRunner.dropTable('pacientes');
  }
}
