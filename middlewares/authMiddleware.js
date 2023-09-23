const jwt = require("jsonwebtoken");
const person = require("../models/UserModel");
const AsyncHandler = require("express-async-handler");

const AuthMiddleware = AsyncHandler(async (req, res, next) => {
  let token;
  // check id the authorization exists or not
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get the token from the bearer
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await person.findById(decode.id);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized");
    }
  } else {
    throw new Error("No token found");
  }
});

module.exports = AuthMiddleware;
