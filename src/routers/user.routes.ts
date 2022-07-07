import { Router } from "express";

const routes = Router();

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListHimSelfController from "../controllers/users/userListHimSelf.controller";
import userDeleteSelfController from "../controllers/users/userDeleteSelf.controller";
// import userUpdateController from "../controllers/users/userUpdatePassword.controller";

import { userCreateSchema } from "../middlewares/validateUserCreate.middleware";
import { validateUserCreate } from "../middlewares/validateUserCreate.middleware";

routes.post("/users",validateUserCreate(userCreateSchema), userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userListHimSelfController);
routes.delete("/users/:id", userDeleteSelfController);
// routes.patch("/users/me/updatePassword", userUpdateController);

export default routes;


