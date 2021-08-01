import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePedal1627683774959 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pedals",

        columns: [
          {
            name: "id",

            type: "uuid",

            isPrimary: true,
          },

          {
            name: "name",

            type: "varchar",
          },

          {
            name: "start_date",

            type: "timestamp",
          },

          {
            name: "start_date_registration",

            type: "timestamp",
          },

          {
            name: "end_date_registration",

            type: "timestamp",
          },

          {
            name: "additional_information",

            type: "varchar",
          },

          {
            name: "start_place",

            type: "varchar",
          },

          {
            name: "participants_limit",

            type: "numeric",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pedals");
  }
}
