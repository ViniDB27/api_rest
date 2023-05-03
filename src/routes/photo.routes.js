import { Router } from "express";

import photoController from "../controllers/photo.controller";

const routes = new Router();

routes.get("/", photoController.index);

export default routes;
