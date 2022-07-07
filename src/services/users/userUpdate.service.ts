import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { IUserUpdated } from "../../interfaces/user";

const userUpdateService = async (id: string, changes: IUserUpdated) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new Error("User dont exists");
  }
   
  const user = new User();
  user.name = changes.name ? changes.name : account.name;
  user.email = changes.email ? changes.email : account.email;
  user.password = changes.password
    ? bcrypt.hashSync(changes.password, 10)
    : account.password;
  user.age = changes.age ? changes.age : account.age;
  
   await userRepository.update(id, {
    name: user.name,
    email: user.email,
    password: user.password,
    age: user.age,
  });


  return true
};

export default userUpdateService;
