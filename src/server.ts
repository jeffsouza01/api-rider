import "reflect-metadata";
import "dotenv/config";

import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import Express from "express";
import jwt from "express-jwt";

import createConnection from "./database";
import schema from "./schemas";

createConnection();
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
      secret: process.env.JWT_SECRET as string,
      algorithms: ["HS256"],
      credentialsRequired: false,
    })
  );

  await server.start();

  server.applyMiddleware({ app });

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server is Running on port: ${port}!!`);
  });
};

main();
