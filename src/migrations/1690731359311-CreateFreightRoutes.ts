import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateFreightRoutes1690731359311 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'freight_route',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'person_id',
            type: 'integer',
          },
          {
            name: 'received',
            type: 'boolean',
            default: false,
          },
          {
            name: 'origin',
            type: 'varchar',
          },
          {
            name: 'destiny',
            type: 'varchar',
          },
          {
            name: 'origin_date',
            type: 'timestamp',
          },
          {
            name: 'destiny_date',
            type: 'timestamp',
          },
          {
            name: 'negotiated_amount',
            type: 'decimal',
            default: 0,
          },
          {
            name: 'advance_amount',
            type: 'decimal',
            default: 0,
          },
          {
            name: 'received_amount',
            type: 'decimal',
            default: 0,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    )

    await queryRunner.createForeignKey(
      'freight_route',
      new TableForeignKey({
        name: 'personFreightRouteForeignKey',
        columnNames: ['person_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'person',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'freight_route',
      'personFreightRouteForeignKey'
    )
    await queryRunner.dropTable('freight_route')
  }
}
