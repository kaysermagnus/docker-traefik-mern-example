import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, unique: true })
  email!: string;

  @Column({ nullable: true })
  token!: string;

  @ManyToOne(() => User, user => user.accounts)
  user!: User;
}
