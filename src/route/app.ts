import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "../config/ormconfig";
import userRouter from "./user.route";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);

AppDataSource.initialize()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("DB Connection Error", err));

export default app;
