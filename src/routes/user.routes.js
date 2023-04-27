import { Router } from "express";

import userController from "../controllers/user.controller";

const routes = new Router();

routes.post("/", userController.store);
routes.get("/", userController.index);

export default routes;
