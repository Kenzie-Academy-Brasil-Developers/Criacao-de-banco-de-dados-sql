import { Request, Response } from "express";
import userDeleteSelfService from "../../services/users/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const user = await userDeleteSelfService(id);

    return res.status(204).json({ message: "User deleted with sucess!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userDeleteSelfController;