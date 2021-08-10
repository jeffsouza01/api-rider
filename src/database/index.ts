import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "back_end_graphql"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === "test" ? "192.168.99.100" : host,
      database:
        process.env.NODE_ENV === "test"
          ? "rider_test"
          : defaultOptions.database,
    })
  );
};
