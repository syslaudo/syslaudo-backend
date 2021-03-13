import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class criarTabelaProfessores1615674665237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'professores',
                columns: [
                    {
                        name: 'id_professor',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'titulacao',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'id_medico',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_id_professor_medico',
                        referencedTableName: 'medicos',
                        referencedColumnNames: ['id_medico'],
                        columnNames: ['id_professor'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
