import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMessages1619014874281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: "messages",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "admin_id",
                    type: "uuid",
                    isNullable:true,
                },
                {
                    name: "user_id",
                    type: "uuid",
                },
                {
                    name:"text",
                    type:"varchar",
                },
                {
                    name:"created_at",
                    type:"timespamp", 
                    default:"now()",
                }
            ],
            foreignKeys:[
                {
                    name:"FKUser",
                    referencedTableName:"users",
                    referencedColumnNames:["id"],
                    columnNames:["user_id"],
                    onDelete:"SET NULL",//aqui estamos defininando se o user_id for removivel estamos setando como "nulo"
                    onUpdate:"SET NULL", 
                }
            ]
        })
        )}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages")
    }

};
