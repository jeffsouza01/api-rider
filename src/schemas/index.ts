import { buildSchemaSync } from "type-graphql";

import { AuthController } from "../controllers/AuthController";
import { PedalController } from "../controllers/PedalController";
import { UsersController } from "../controllers/UsersController";
import ensureAuthenticated from "../middleware/ensureAuthenticated";

const schema = buildSchemaSync({
  resolvers: [UsersController, AuthController, PedalController],
  authChecker: ensureAuthenticated,
});

export default schema;
