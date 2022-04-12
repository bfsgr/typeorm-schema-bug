import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { IndustryUser, InternalUser } from "./User"

@Entity("post", { schema: "internal" })
export class InternalPost {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => InternalUser, u => u.posts)
  users: InternalUser[]
}

@Entity("post", { schema: "industry" })
export class IndustryPost {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => IndustryUser, u => u.posts)
  users: IndustryUser[]
}
