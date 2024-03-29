const Category = require("../Models/category");

// @route POST /categories
const addCategory = async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({ message: "Enter name of category" });
  }
  const category = await Category.create({
    name: name,
    description: description,
  });
  res.status(200).json(category);
};

// @route GET /categories
const getAll = async (req, res) => {
  const Categories = await Category.find();

  res.status(200).json(Categories);
};

//  get category by id

const getCategoryById = async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.status(200).json(category);
};

// @route PUT /categories/:id
const updateCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
    // throw new Error(`Category not found`)
  }

  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedCategory);
};


// delete category
const deleteCategory = async (req, res) => {
  Category.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      res.status(200).json({ message: `category deleted successfully` });
    } else {
      res.status(400).json({ message: `Delete failed` });
    }
  });
};
 

module.exports = {
  addCategory,
  getAll,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
