import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createFreightRegisters1690691118771 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'freight_register',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'person_id',
            type: 'integer',
          },
          {
            name: 'capacity',
            type: 'decimal',
          },
          {
            name: 'body_type',
            type: 'decimal',
          },
          {
            name: 'type_name',
            type: 'decimal',
          },
          {
            name: 'category',
            type: 'decimal',
          },
          {
            name: 'is_articulated',
            type: 'decimal',
          },
          {
            name: 'capacity_measurement_unit',
            type: 'decimal',
          },
          {
            name: 'localizador',
            type: 'decimal',
          },
          {
            name: 'tracker',
            type: 'decimal',
          },
          {
            name: 'Carroceria',
            type: 'decimal',
          },
          {
            name: 'permissionado',
            type: 'decimal',
          },
          {
            name: 'lat',
            type: 'decimal',
          },
          {
            name: 'lng',
            type: 'decimal',
          },
          {
            name: 'cidade_capital',
            type: 'decimal',
          },
          {
            name: 'portuaria',
            type: 'decimal',
          },
          {
            name: 'score_transacional',
            type: 'decimal',
          },
          {
            name: 'score_documental',
            type: 'decimal',
          },
          {
            name: 'score_motorista',
            type: 'decimal',
          },
          {
            name: 'verificado',
            type: 'decimal',
          },
          {
            name: 'dependencia',
            type: 'decimal',
          },
          {
            name: 'tipo_usuario',
            type: 'decimal',
          },
          {
            name: 'resposta',
            type: 'decimal',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('freight_register')
  }
}
