import { Router } from "express";
import { AppDataSource } from "../config/ormconfig";
import { UserController } from "../controller/user.controller";
import { User } from "../entities/User.entity";
import { UserFactory } from "../factory/user.factory";
import { UserRepository } from "../repository/user.repository";
// dependencies
const userRepository = new UserRepository(AppDataSource, User);
const userFactory = new UserFactory(userRepository);
const userControler = new UserController(userFactory);

const router = Router();
router.post("/addUser", userControler.addUser);

export default router;
