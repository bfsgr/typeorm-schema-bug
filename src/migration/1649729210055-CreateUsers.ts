import { MigrationInterface, QueryRunner, Table, TableOptions } from "typeorm"

export class CreateUsers1649729210055 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const baseTable: TableOptions = {
      name: "user",
      columns: [
        {
          name: "id",
          type: "integer",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "name",
          type: "varchar",
        },
      ],
    }

    await queryRunner.createTable(
      new Table({ ...baseTable, schema: "industry" })
    )
    await queryRunner.createTable(
      new Table({ ...baseTable, schema: "internal" })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('industry.user')
      await queryRunner.dropTable('internal.user')
  }
}
