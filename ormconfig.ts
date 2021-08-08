export default {
  type: process.env.DB_TYPE,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/database/**/entities/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
