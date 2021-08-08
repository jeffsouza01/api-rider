import { hash } from "bcryptjs";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { getRepository, Repository } from "typeorm";

import { User } from "../database/entities/User";
import { CreateUserInput } from "./inputs/CreateUserInput";

@Resolver()
class UsersController {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  @Query(() => [User], { name: "users" })
  @Authorized()
  async show(): Promise<User[]> {
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

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersController };
