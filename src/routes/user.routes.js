import { Router } from "express";

import userController from "../controllers/user.controller";

const routes = new Router();

routes.post("/", userController.store);
routes.get("/", userController.index);
routes.get("/:id", userController.show);
routes.put("/:id", userController.update);
routes.delete("/:id", userController.delete);

export default routes;
