import User from "../models/User";

class UserController {
  async index(req, res) {
    const user = await User.create({
      name: "John",
      email: "jhon@doe.com",
      password: "jhondoe",
    });

    res.json(user);
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);

      const {password, password_hash, ...rest} = user.toJSON();

      res.json(rest);

    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }

  }
}

export default new UserController();
