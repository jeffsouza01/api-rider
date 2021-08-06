import { hash } from "bcryptjs";
import {
  Arg,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { getRepository, Repository } from "typeorm";

import { User } from "../database/entities/User";
import ensureAuthenticated from "../middleware/ensureAuthenticated";
import { IContext } from "../types/IContext";
import { CreateUserInput } from "./inputs/CreateUserInput";

@Resolver()
class UsersController {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  @Query(() => [User], { name: "users" })
  @Authorized()
  async show(@Ctx() ctx: IContext): Promise<User[]> {
    const users = await this.usersRepository.find();

    return users;
  }

  @Mutation(() => User, { name: "createUser" })
  async createUser(@Arg("newUser") newUser: CreateUserInput): Promise<User> {
    const hashedPassword = await hash(newUser.password, 8);

    const user = this.usersRepository.create({
      name: newUser.name,
      email: newUser.email,
      password: hashedPassword,
    });

    // const token = ctx.req.headers.authorization;

    // console.log(token);

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersController };
