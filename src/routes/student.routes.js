import { Router } from "express";

import studentController from "../controllers/student.controller";
import loginRequired from "../middleware/login.middleware";

const routes = new Router();

routes.post("/", loginRequired, studentController.store);
routes.get("/", loginRequired, studentController.index);
routes.get("/:id", loginRequired, studentController.show);
routes.put("/:id", loginRequired, studentController.update);
routes.delete("/:id", loginRequired, studentController.delete);

export default routes;
