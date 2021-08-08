import { Field, InputType } from "type-graphql";

@InputType()
class CreatePedalInput {
  @Field()
  name: string;

  @Field()
  start_date: Date;

  @Field()
  start_date_registration: Date;

  @Field()
  end_date_registration: Date;

  @Field()
  additional_information?: string;

  @Field()
  start_place: string;

  @Field()
  participants_limit: number;

  @Field({ nullable: true })
  user_id?: string;
}

export { CreatePedalInput };
