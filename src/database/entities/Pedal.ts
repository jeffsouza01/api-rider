import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@ObjectType()
@Entity("pedals")
class Pedal {
  @Field((type) => ID)
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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Pedal };
