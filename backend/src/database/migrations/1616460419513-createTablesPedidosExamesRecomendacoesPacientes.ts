import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from 'typeorm';

export class createTablesPedidosExamesRecomendacoesPacientes1616460419513
  implements MigrationInterface {
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
            isNullable: false,
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
            name: 'hora_realizacao',
            type: 'timestamp without time zone',
            isNullable: false,
          },
          {
            name: 'laudo_medico',
            type: 'varchar',
          },
          {
            name: 'tipo_exame',
            type: 'varchar',
          },
          {
            name: 'imagem_exame',
            type: 'varchar',
          },
          {
            name: 'laudo_aprovado',
            type: 'boolean',
          },
          {
            name: 'id_pedido',
            type: 'uuid',
            isUnique: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
        ],
      }),
    );

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
            name: 'recomendacao_escrita',
            type: 'varchar',
          },
          {
            name: 'data_prevista',
            type: 'timestamp without time zone',
            isNullable: false,
          },
          {
            name: 'hipotese_diagnostico',
            type: 'varchar',
          },
          {
            name: 'aguarda_realizacao',
            type: 'boolean',
          },
          {
            name: 'id_pedido',
            type: 'uuid',
            isUnique: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'id_medico',
            type: 'uuid',
            isUnique: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'pedidos',
        columns: [
          {
            name: 'id_pedido',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome_exame',
            type: 'varchar',
          },
          {
            name: 'id_paciente',
            type: 'uuid',
            isUnique: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'id_medico',
            type: 'uuid',
            isUnique: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
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

    await queryRunner.createUniqueConstraint(
      'exames',
      new TableUnique({
        columnNames: ['id_exame'],
        name: 'unique_id_exame',
      }),
    );

    await queryRunner.createUniqueConstraint(
      'recomendacoes',
      new TableUnique({
        columnNames: ['id_recomendacao'],
        name: 'unique_id_recomendacao',
      }),
    );

    await queryRunner.createUniqueConstraint(
      'pedidos',
      new TableUnique({
        columnNames: ['id_pedido'],
        name: 'unique_id_pedido',
      }),
    );

    await queryRunner.createForeignKey(
      'exames',
      new TableForeignKey({
        name: 'fk_exame_pedido',
        columnNames: ['id_pedido'],
        referencedColumnNames: ['id_pedido'],
        referencedTableName: 'pedidos',
      }),
    );

    await queryRunner.createForeignKey(
      'recomendacoes',
      new TableForeignKey({
        name: 'fk_recomendacoes_pedido',
        columnNames: ['id_pedido'],
        referencedColumnNames: ['id_pedido'],
        referencedTableName: 'pedidos',
      }),
    );

    await queryRunner.createForeignKey(
      'pedidos',
      new TableForeignKey({
        name: 'fk_pedido_paciente',
        columnNames: ['id_paciente'],
        referencedColumnNames: ['id_paciente'],
        referencedTableName: 'pacientes',
      }),
    );

    await queryRunner.createForeignKey(
      'pedidos',
      new TableForeignKey({
        name: 'fk_medico_pedido',
        columnNames: ['id_medico'],
        referencedColumnNames: ['id_medico'],
        referencedTableName: 'medicos',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    await queryRunner.dropTable('pacientes');
    await queryRunner.dropTable('pedidos');
    await queryRunner.dropTable('exames');
    await queryRunner.dropTable('recomendacoes');
  }
}
