const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAll, 
  // updateProduct,
  // deleteProduct,
  // getProductImage,
} = require("../Controller/productController");
const upload = require("../middleware/upload");

router.post("/addProduct", upload.single("image"), addProduct);
router.get("/getAll", getAll);
// router.get("/getProductImage", getProductImage);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

module.exports = router;
