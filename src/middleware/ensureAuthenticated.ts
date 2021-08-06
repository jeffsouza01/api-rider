import { verify } from "jsonwebtoken";
import { AuthChecker } from "type-graphql";

import AuthConfig from "../config/AuthConfig";
import { IContext } from "../types/IContext";

const ensureAuthenticated: AuthChecker<IContext> = ({ context }): boolean => {
  const authHeader = context.token;

  if (!authHeader) {
    return false;
  }

  const [, token] = authHeader.split(" ");
  const { sub: user_id } = verify(token, AuthConfig.jwt.secret);

  try {
    return !!user_id;
  } catch {
    return false;
  }
};

export default ensureAuthenticated;
