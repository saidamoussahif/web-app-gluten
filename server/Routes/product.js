const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAll, 
  updateProduct,
  deleteProduct,
  getProductByCategory,
  getProductById
} = require("../Controller/product");
const upload = require("../middleware/upload");

router.post("/create", upload.single("image"), addProduct);
router.get("/getAll", getAll);
router.get("/getProductByCategory/:category", getProductByCategory);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProductById);

module.exports = router;



