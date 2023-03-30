import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class user1680021411444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "varchar(38)",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar(100)",
                    },
                    {
                        name: "email",
                        type: "varchar(100)",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar(100)"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")
    }

}
