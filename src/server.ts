import "reflect-metadata";

import { ApolloServer } from "apollo-server";

import newSchema from "./schemas";

const app = async () => {
  const schema = await newSchema();

  const server = new ApolloServer({});

  server.listen({ port: process.env.APP_PORT }, () =>
    console.log("Server is Running!")
  );
};

app();
