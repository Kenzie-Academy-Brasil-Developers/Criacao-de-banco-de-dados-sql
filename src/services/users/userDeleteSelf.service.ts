import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteSelfService = async (id : any) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new Error("User dont exists");
  }

  await userRepository.delete(account!.id);

  return true;
};

export default userDeleteSelfService;
