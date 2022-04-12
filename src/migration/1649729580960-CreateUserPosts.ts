import {MigrationInterface, QueryRunner, Table, TableOptions} from "typeorm";

export class CreateUserPosts1649729580960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const baseTable: TableOptions = {
            name: "user_posts",
            columns: [
              {
                name: "user_id",
                type: "integer",
                isPrimary: true,
              },
              {
                name: "post_id",
                type: "integer",
                isPrimary: true,
              },
            ],
            foreignKeys: [
                {
                    columnNames: ['user_id'],
                    referencedTableName: 'user',
                    referencedColumnNames: ['id'],
                },
                {
                    columnNames: ['post_id'],
                    referencedTableName: 'post',
                    referencedColumnNames: ['id'],
                }
            ]
          }
      
          await queryRunner.createTable(
            new Table({ ...baseTable, schema: "industry" })
          )
          await queryRunner.createTable(
            new Table({ ...baseTable, schema: "internal" })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("industry.user_posts")
        await queryRunner.dropTable("internal.user_posts")
    }

}
