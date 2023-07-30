import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

export class createPersonFreightForeignKey1690718906116
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'freight_register',
      new TableForeignKey({
        name: 'personFreightForeignKey',
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
      'freight_register',
      'personFreightForeignKey'
    )
  }
}
