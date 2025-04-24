import { Request, Response } from "express";
import { UserFactory } from "../factory/user.factory";
import { CustomError, CustomErrorResponseHandler } from "../types/error.type";

export class UserController {
  constructor(private readonly userFactory: UserFactory) {}

  addUser = async (req: Request, res: Response) => {
    try {
      const name = req.body.name as string;
      const user = await this.userFactory.addNewUser({ name });
      res.status(200).send(user);
      return;
    } catch (err) {
      console.error(err);
      if (err instanceof CustomError) {
        CustomErrorResponseHandler.addErrorResponse(res, err);
        return;
      }
      res.send(500).send("Unknown Error");
    }
  };
}
