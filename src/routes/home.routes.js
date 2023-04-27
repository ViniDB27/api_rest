import { Router } from "express";

import homeController from "../controllers/home.controller";

const routes = new Router();

routes.get("/", homeController.index);

export default routes;
