const express = require("express");
const {
  createOrder,
  getOrders,
  getOrderById,
} = require("../Controller/order");
const router = express.Router();

// createOrder
router.post("/createOrder", createOrder);
// get order
router.get("/", getOrders);
// get order by id
router.get("/:id", getOrderById);



module.exports = router;
