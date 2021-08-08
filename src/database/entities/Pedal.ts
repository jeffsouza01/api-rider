import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./User";

@ObjectType()
@Entity("pedals")
class Pedal {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  start_date: Date;

  @Field()
  @Column()
  start_date_registration: Date;

  @Field()
  @Column()
  end_date_registration: Date;

  @Field()
  @Column()
  additional_information: string;

  @Field()
  @Column()
  start_place: string;

  @Field()
  @Column()
  participants_limit: number;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Field(() => String)
  @Column()
  user_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Pedal };
