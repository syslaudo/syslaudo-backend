import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableUnique } from "typeorm";

export class criarTabelaProfessores1615674665237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createUniqueConstraint('medicos', new TableUnique({
            columnNames: ['id_medico'],
            name: 'unique_id_medico'
        }))

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
                        isUnique: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    }
                ]
            })
        );
        await queryRunner.createForeignKey('professores', new TableForeignKey({
            name: 'fk_professor_medico',
            columnNames: ['id_professor'],
            referencedColumnNames: ['id_medico'],
            referencedTableName: 'medicos'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('professores');
    }

}
