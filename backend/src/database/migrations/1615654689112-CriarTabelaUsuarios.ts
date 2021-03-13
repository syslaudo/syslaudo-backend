import { MigrationInterface, QueryRunner, Table } from "typeorm";

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
                        name: 'nome_usuario',
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
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    },

                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }
}
