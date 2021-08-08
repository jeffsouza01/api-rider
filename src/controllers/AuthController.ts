import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Arg, Mutation, Resolver } from "type-graphql";
import { getRepository, Repository } from "typeorm";

import AuthConfig from "../config/AuthConfig";
import { Auth } from "../database/entities/Auth";
import { User } from "../database/entities/User";
import { AuthInput } from "./inputs/AuthInput";

@Resolver(Auth)
class AuthController {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  @Mutation(() => Auth)
  async login(@Arg("data") authInput: AuthInput): Promise<Auth> {
    const { email, password } = authInput;

    const user = await this.userRepository.findOne({
      email,
    });

    if (!user) {
      throw new Error("Invalid User or Password");
    }

    const passCompare = await compare(password, user.password);

    if (!passCompare) {
      throw new Error("Invalid User or Password");
    }

    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {
      subject: `${user.id}`,
      expiresIn,
    });

    return {
      token,
      user,
    };
  }
}

export { AuthController };
