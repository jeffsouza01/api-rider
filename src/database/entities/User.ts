import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@ObjectType()
@Entity("users")
class User {
  @Field((type) => ID, { nullable: true })
  @PrimaryColumn()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field((type) => String, { nullable: false })
  email: string;

  @Column()
  @Field((type) => String, { nullable: false })
  password: string;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
