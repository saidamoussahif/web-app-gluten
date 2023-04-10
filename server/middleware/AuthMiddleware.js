const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../Models/user");

const verifyToken = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, process.env.TOKEN);

      // get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401).send("Not authorized, no token");
  }
});

// check if the user is an admin
const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  }
  if (!req.user) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  if (req.user && req.user.role !== "admin") {
    res.status(401);
    throw new Error("Not authorized, not an admin");
  }
});



module.exports = { verifyToken, isAdmin };
