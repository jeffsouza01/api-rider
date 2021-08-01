import { Field, InputType } from "type-graphql";

@InputType({ description: "User for create a new user" })
class CreateUserInput {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

export { CreateUserInput };
