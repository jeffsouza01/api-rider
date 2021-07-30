import { buildSchema } from "type-graphql";

const schema = async () =>
  await buildSchema({
    resolvers: [],
  });

export default schema;
