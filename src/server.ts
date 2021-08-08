import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import Express from "express";
import jwt from "express-jwt";

import "./database";

import AuthConfig from "./config/AuthConfig";
import schema from "./schemas";

const app = Express();

const main = async () => {
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const context = {
        req,
        user: req.user,
        token: req?.headers?.authorization,
      };

      return context;
    },
  });

  app.use(cors());

  app.use(
    jwt({
      secret: AuthConfig.jwt.secret,
      algorithms: ["HS256"],
      credentialsRequired: false,
    })
  );

  await server.start();

  server.applyMiddleware({ app });

  app.listen(3000, () =>
    console.log(`Server is Running on http://localhost:3000/graphql`)
  );
};

main();
