import { Field, InputType } from "type-graphql";

@InputType()
class AuthInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

export { AuthInput };
