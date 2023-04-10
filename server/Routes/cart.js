const express = require("express");
const {
  addItemToCart,
  getCart,
  deleteCartItem,

} = require("../controller/cart");
const { verifyToken } = require("../middleware/AuthMiddleware");
const router = express.Router();

// add to cart
// router.post("/addItemToCart", verifyToken, addItemToCart);
router.route("/addItemToCart").post(verifyToken, addItemToCart);
// router.route("/createAccount").post(verifyToken, createAccount);


// get cart
router.get("/", getCart);

// delete cart
router.delete("/:id", deleteCartItem);


module.exports = router;
