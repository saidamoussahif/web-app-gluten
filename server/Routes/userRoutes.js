const express = require("express");
const {
  Login,
  Register,
  // getUserById,
  getUsers
} = require("../Controller/UserController");
const router = express.Router();

// const { verifyToken } = require("../Middlewares/AuthMiddleware");

router.route("/register").post(Register);
router.route("/login").post(Login);
// router.route("/:id").get(verifyToken, getUserById);
router.route("/getAll").get(getUsers);

module.exports = router;
