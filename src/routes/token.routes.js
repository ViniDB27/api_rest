import { Router } from "express";

import tokenController from "../controllers/token.controller";

const routes = new Router();

routes.post("/", tokenController.index);

export default routes;
