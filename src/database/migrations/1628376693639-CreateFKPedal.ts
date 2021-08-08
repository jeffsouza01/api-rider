import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateFKPedal1628376693639 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "pedals",
      new TableColumn({
        name: "user_id",
        type: "uuid",
      })
    );

    await queryRunner.createForeignKey(
      "pedals",
      new TableForeignKey({
        name: "FK_PedalUser",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("pedals", "FK_PedalUser");
    await queryRunner.dropColumn("pedals", "user_id");
  }
}
