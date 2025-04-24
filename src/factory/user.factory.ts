import { User } from "../entities/User.entity";
import { UserRepository } from "../repository/user.repository";
import { CustomError, ErrorCodeEnum } from "../types/error.type";
import { UserInput } from "../types/user.type";

export class UserFactory {
  constructor(private readonly userRepository: UserRepository) {}

  addNewUser = async (data: UserInput): Promise<User> => {
    try {
      const newUser = await this.userRepository.addUser(data);
      return newUser;
    } catch (err) {
      console.error(err);
      if (err instanceof CustomError) {
        throw err;
      }
      throw new CustomError(ErrorCodeEnum.UNKNOWN_ERROR, "Unhandled error");
    }
  };
}
