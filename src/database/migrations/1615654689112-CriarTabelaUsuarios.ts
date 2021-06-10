import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CriarTabelaUsuarios1615654689112 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'nome_do_usuario',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'email_usuario',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },

          {
            name: 'senha',
            type: 'varchar',
          },

          {
            name: 'tipo',
            type: 'varchar',
          },

          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
          },

          {
            name: 'crm',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'titulacao',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'data_residencia',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'reset_link',
            type: 'varchar',
            default: "''",
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    await queryRunner.dropTable('usuarios');
  }
}
