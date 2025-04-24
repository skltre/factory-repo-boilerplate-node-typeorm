import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_DATABASE || "mydatabase",
  synchronize: false, // Auto-migrates entities (disable in production)
  logging: ["warn", "query"], // Logs SQL queries
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/entities/*.js"
      : "src/entities/*.ts",
  ],
  migrations: [
    process.env.NODE_ENV === "production"
      ? "dist/migrations/*.js"
      : "src/migrations/*.ts",
  ],
  migrationsTableName: "migrations", // Track applied migrations
});
