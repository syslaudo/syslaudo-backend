import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CriarTabelaMedicos1615672358802 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'medicos',
        columns: [
          {
            name: 'id_medico',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'crm',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ativo',
            type: 'boolean',
            isNullable: false,
            default: true,
          },
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_id_usuario',
            referencedTableName: 'usuarios',
            referencedColumnNames: ['id'],
            columnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('medicos');
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
