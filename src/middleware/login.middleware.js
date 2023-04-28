import jwt from "jsonwebtoken";

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["Não autorizado"],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = data;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      errors: ["Não autorizado"],
    });
  }
};
