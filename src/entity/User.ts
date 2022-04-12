import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { IndustryPost, InternalPost } from "./Post"

@Entity("user", { schema: "internal" })
export class InternalUser {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => InternalPost, p => p.users, { cascade: true })
  @JoinTable({
      name: 'user_posts',
      schema: 'internal',
      joinColumn: { name: 'user_id' },
      inverseJoinColumn: { name: 'post_id' }
  })
  posts: InternalPost[]
}

@Entity("user", { schema: "industry" })
export class IndustryUser {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => IndustryPost, p => p.users, { cascade: true })
  @JoinTable({
      name: 'user_posts',
      schema: 'industry',
      joinColumn: { name: 'user_id' },
      inverseJoinColumn: { name: 'post_id' }
  })
  posts: IndustryPost[]
}
