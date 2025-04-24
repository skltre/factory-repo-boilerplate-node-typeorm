import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  userId: string;

  @Column("text", { nullable: false })
  name: string;
}
