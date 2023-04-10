const Product = require("../Models/product");
// const sharp = require("sharp");
const path = require("path");
const express = require("express");
const app = express();
app.use(express.static("public"));
const Category = require("../Models/category");
var fs = require('fs')

// get all products
const getAll = async (req, res) => {
  const products = await Product.find().populate("category");
  res.status(200).json(products);
};

// get product by category
const getProductByCategory = async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.status(200).json(products);
};

// get product by id  
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
};

// product
const addProduct = async (req, res) => {
  const { category, productName, quantity, price, description , image } = req.body;
  // const { file } = req;

  !category || !productName || !quantity || !price || !description
    ? res.status(400).json({ message: `All fields are required` })
    : null;

  const fileName = req.file.filename;

  //find category by id
  const categoryName = await Category.findById(category);

  const product = await Product.create({
    category: categoryName.name,
    productName: req.body.productName,
    quantity: req.body.quantity,
    image: fileName,
    price: req.body.price,
    description: req.body.description,
  });
  res.status(200).json({
    message: `Product added successfully`,
    product:product
  });
};

// based on the add product function give me the update function
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { category, productName, quantity, price, description, image } = req.body;
  const { file } = req;

  try {
    let updatedFields = {};
    if (category) updatedFields.category = category.name;
    if (productName) updatedFields.productName = productName;
    if (quantity) updatedFields.quantity = quantity;
    if (price) updatedFields.price = price;
    if (description) updatedFields.description = description;
    if (file) {
      const fileName = req.file.filename;
      updatedFields.image = fileName;
    }
    const product = await Product.findByIdAndUpdate(id, updatedFields, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      res.status(200).json({ message: `Product deleted successfully` });
    } else {
      res.status(400).json({ message: `Delete failed` });
    }
  });
};


module.exports = {
  addProduct,
  getAll,
  getProductByCategory,
  getProductById,
  updateProduct,
  deleteProduct,
};




