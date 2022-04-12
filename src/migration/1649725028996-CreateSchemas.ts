import { MigrationInterface, QueryRunner, Table, TableOptions } from "typeorm"

export class CreateSchemas1649725028996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('industry')
    await queryRunner.createSchema('internal')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('industry')
    await queryRunner.dropSchema('internal')
  }
}
