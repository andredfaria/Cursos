import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619051835036 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "email",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "timestemp",
            default: "now()"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }

}
