import { Request, Response } from "express";
import userListHimSelfService from "../../services/users/userListHimSelf.service";

const userListHimSelfController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const user = await userListHimSelfService(id);

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListHimSelfController;