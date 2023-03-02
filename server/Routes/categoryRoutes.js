const express = require("express");
const router = express.Router();
const { addCategory, getAll, updateCategory, deleteCategory} = require("../Controller/categoryController");

router.post("/add", addCategory);
router.get("/getAll", getAll);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);


module.exports = router;
