import dotenv from "dotenv";

dotenv.config();

import "./src/database";

import express from "express";
import homeRoutes from "./src/routes/home.routes";
import userRoutes from "./src/routes/user.routes";
import tokenRoutes from "./src/routes/token.routes";
import studentRoutes from "./src/routes/student.routes";
import photoRoutes from "./src/routes/photo.routes";


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
    this.app.use("/auth", tokenRoutes);
    this.app.use("/students", studentRoutes);
    this.app.use("/photo", photoRoutes);
  }
}

export default new App().app;
