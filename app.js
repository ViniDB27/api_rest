import dotenv from "dotenv";

dotenv.config();

import "./src/database";

import express from "express";
import homeRoutes from "./src/routes/home.routes";
import userRoutes from "./src/routes/user.routes";


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users", userRoutes);
  }
}

export default new App().app;
