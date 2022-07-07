import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const changes = req.body

    const user = await userUpdateService(id,changes);

    return res.status(200).json({ message: "Account updated!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;