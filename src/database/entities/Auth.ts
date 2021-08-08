import { Field, ObjectType } from "type-graphql";

import { User } from "./User";

interface IAuth {
  token: string;
  user: User;
}

@ObjectType()
class Auth implements IAuth {
  @Field({ nullable: false })
  token: string;

  @Field(() => User, { nullable: false })
  user: User;
}

export { Auth };
