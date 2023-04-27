import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json(null);
    }

  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      await user.update(req.body);
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    return res.json({ message: "usuário excluído com sucesso!" });
  }
}

export default new UserController();
