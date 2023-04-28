import { Router } from "express";

import userController from "../controllers/user.controller";

import loginRequired from "../middleware/login.middleware";

const routes = new Router();

// routes.get("/", loginRequired, userController.index);
// routes.get("/:id", loginRequired, userController.show);

routes.post("/", userController.store);
routes.put("/", loginRequired, userController.update);
routes.delete("/", loginRequired, userController.delete);

export default routes;
