import { IsEmail } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { IsEmailAlreadyExists } from "../../controllers/validator/isEmailAlreadyexists";
import { Pedal } from "./Pedal";

@ObjectType()
@Entity("users")
class User {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @IsEmail()
  @IsEmailAlreadyExists()
  @Field(() => String, { nullable: false })
  email: string;

  @Column()
  @Field(() => String, { nullable: false })
  password: string;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @UpdateDateColumn()
  @Field()
  updated_at: Date;

  @Field(() => [Pedal], { nullable: true })
  @JoinColumn()
  @OneToMany(() => Pedal, (pedal) => pedal.id)
  pedals?: Pedal;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
