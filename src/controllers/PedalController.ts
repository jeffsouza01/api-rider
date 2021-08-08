import { Arg, Authorized, Ctx, Mutation, Query } from "type-graphql";
import { getRepository, Repository } from "typeorm";

import { Pedal } from "../database/entities/Pedal";
import { User } from "../database/entities/User";
import { IContext } from "../types/IContext";
import { CreatePedalInput } from "./inputs/CreatePedalInput";

class PedalController {
  private pedalRepository: Repository<Pedal>;
  private userRepository: Repository<User>;

  constructor() {
    this.pedalRepository = getRepository(Pedal);
    this.userRepository = getRepository(User);
  }

  @Mutation(() => Pedal, { name: "createPedal" })
  @Authorized()
  async create(
    @Arg("data")
    {
      name,
      start_date,
      end_date_registration,
      participants_limit,
      start_date_registration,
      start_place,
      additional_information,
    }: CreatePedalInput,
    @Ctx() ctx: IContext
  ): Promise<Pedal> {
    const { sub: userId }: any = ctx.req.user;
    const user = await this.userRepository.findOne(userId);

    const pedal = this.pedalRepository.create({
      name,
      start_date,
      end_date_registration,
      participants_limit,
      start_date_registration,
      start_place,
      additional_information,
      user_id: userId,
      user,
    });

    await this.pedalRepository.save(pedal);

    return pedal;
  }

  @Query(() => [Pedal])
  async showPedals() {
    const pedals = await this.pedalRepository.find();

    return pedals;
  }
}

export { PedalController };
