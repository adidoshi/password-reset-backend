const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.protect = async (req, res, next) => {
  // let token;

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // if (token == null) return res.sendStatus(401);

  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // ) {
  //   token = req.headers.authorization.split(" ")[1];
  // }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    // const decoded =
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });

    // const user = await User.findById(decoded.id);

    // if (!user) {
    //   return next(new ErrorResponse("No user found with this id", 400));
    // }

    // req.user = user;
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};
