import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteSelfService = async (id : string) => {
  
  try {
    const userRepository = AppDataSource.getRepository(User);

    await userRepository.delete({ id: id });

    return {message : "user Deleted with sucess"}
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default userDeleteSelfService;
