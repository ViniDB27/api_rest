import User from "../models/User";
import bcriptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class TokenController {
  async index(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ["Credenciais inválidas"],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ["Credenciais inválidas"],
      });
    }

    const passwordMatch = await bcriptjs.compare(password, user.password_hash);

    if (!passwordMatch) {
      return res.status(401).json({
        errors: ["Credenciais inválidas"],
      });
    }

    const toke = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION }
    );

    res.json({
      access_token: toke
    });
  }
}

export default new TokenController();
