import { buildSchemaSync } from "type-graphql";

import { AuthController } from "../controllers/AuthController";
import { UsersController } from "../controllers/UsersController";
import ensureAuthenticated from "../middleware/ensureAuthenticated";

const schema = buildSchemaSync({
  resolvers: [UsersController, AuthController],
  authChecker: ensureAuthenticated,
});

export default schema;
