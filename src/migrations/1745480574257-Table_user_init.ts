import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUserInit1745480574257 implements MigrationInterface {
    name = 'TableUserInit1745480574257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
