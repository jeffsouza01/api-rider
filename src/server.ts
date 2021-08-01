import "reflect-metadata";

import { ApolloServer } from "apollo-server";

import "./database";
import schema from "./schemas";

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const context = {
      req,
      token: req?.headers?.authorization,
    };

    return context;
  },
});

server.listen({ port: 3000 }, () => console.log("Server is Running!"));
