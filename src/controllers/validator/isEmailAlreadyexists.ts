import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { getRepository, Repository } from "typeorm";

import { User } from "../../database/entities/User";

@ValidatorConstraint({ async: true })
export class IsEmailAlreadyExistsConstraint
  implements ValidatorConstraintInterface
{
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  validate(email: string): boolean | Promise<boolean> {
    return this.userRepository.findOne({ email }).then((user) => {
      if (user) return false;
      return true;
    });
  }
}

export function IsEmailAlreadyExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAlreadyExistsConstraint,
    });
  };
}
