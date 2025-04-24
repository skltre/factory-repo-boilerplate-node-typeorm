import { DataSource, EntityTarget, Repository } from "typeorm";
import { User } from "../entities/User.entity";
import { UserInput } from "../types/user.type";
import { CustomError, ErrorCodeEnum } from "../types/error.type";

export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource, targetEntity: EntityTarget<User>) {
    super(targetEntity, dataSource.manager);
  }

  addUser = async (data: UserInput): Promise<User> => {
    try {
      const { name } = data;
      const newUser = this.create({ name });

      return await this.save(newUser);
    } catch (err) {
      console.error(err);
      throw new CustomError(
        ErrorCodeEnum.INTERNAL_SERVER_ERROR,
        "Unable to add user to database."
      );
    }
  };
}
