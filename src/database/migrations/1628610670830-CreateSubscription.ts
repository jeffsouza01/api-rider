import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSubscription1628610670830 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "subscriptions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "ride_id",
            type: "uuid",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "subscription_date",
            type: "timestamp",
          },
        ],
        foreignKeys: [
          {
            name: "FKRider",
            columnNames: ["rider_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "pedals",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKUser",
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("subscriptions");
  }
}
