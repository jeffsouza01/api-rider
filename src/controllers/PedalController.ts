import { Arg, Ctx, Mutation } from "type-graphql";
import { getRepository, Repository } from "typeorm";

import { Pedal } from "../database/entities/Pedal";
import { IContext } from "../types/IContext";
import { CreatePedalInput } from "./inputs/CreatePedalInput";

class PedalController {
  private pedalRepository: Repository<Pedal>;

  constructor() {
    this.pedalRepository = getRepository(Pedal);
  }

  @Mutation(() => Pedal, { name: "createPedal" })
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
    const pedal = this.pedalRepository.create({
      name,
      start_date,
      end_date_registration,
      participants_limit,
      start_date_registration,
      start_place,
      additional_information,
    });

    const token = ctx.req.headers.authorization;

    console.log(token);

    await this.pedalRepository.save(pedal);

    return pedal;
  }
}

export { PedalController };
