import { Router } from "express";

import photoController from "../controllers/photo.controller";
import loginRequired from "../middleware/login.middleware";

const routes = new Router();

routes.get("/", loginRequired, photoController.index);

export default routes;
