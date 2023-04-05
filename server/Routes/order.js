const express = require("express");
const {
  addToCart,
  getCart,
  deleteCart,

} = require("../controller/cart");
const router = express.Router();

// add to cart
router.post("/addToCart", addToCart);

// get cart
router.get("/", getCart);

// delete cart
router.delete("/:id", deleteCart);


module.exports = router;
