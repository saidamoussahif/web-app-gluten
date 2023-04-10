const express = require("express");
const router = express.Router();
const { addCategory, getAll, getCategoryById, updateCategory, deleteCategory} = require("../Controller/category");

router.post("/add", addCategory);
router.get("/getAll", getAll);
router.get("/getCategoryById/:id", getCategoryById);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);


module.exports = router;
