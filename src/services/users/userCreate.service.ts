import { IUserCreate } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";

const userCreateService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.age = age;
  user.created_at = new Date();
  user.updated_at = new Date();
  userRepository.create(user);
  await userRepository.save(user);

  const returnUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    age: user.age,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return returnUser;
};

export default userCreateService;
