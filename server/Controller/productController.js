const Product = require("../Models/productModel");
const sharp = require("sharp");
const path = require("path");
const express = require("express");
const app = express();
app.use(express.static("public"));

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


// route product / post

const addProduct = async (req, res) => {
  const { category, productName, quantity, price, description } = req.body;
  const { file } = req;

  !category || !productName || !quantity || !price || !description
    ? res.status(400).json({ message: `All fields are required` })
    : null;

  const imageName = `${Date.now()}-${file.originalname}`;
  await sharp(req.file.buffer)
    .resize({ width: 250, height: 250 })
    .png()
    .toFile(`./uploads/${imageName}`);

  const product = await Product.create({
    category: req.body.category.name,
    productName: req.body.productName,
    quantity: req.body.quantity,
    image: imageName,
    price: req.body.price,
    description: req.body.description,
  });
  res.status(200).json(product);
};

// const getProductImage = async (req, res) => {
//   const imageName = req.query.image;
//   res.sendFile(path.join(__dirname, "/uploads/", imageName));
// };

//  Update product
const updateProduct = async (req, res) => {
  const { category, productName, quantity, price, description } = req.body;
  const { file } = req;

  !category || !productName || !quantity || !price || !description
    ? res.status(400).json({ message: `All fields are required` })
    : null;

  const imageName = `${Date.now()}-${file.originalname}`;
  await sharp(req.file.buffer)
    .resize({ width: 250, height: 250 })
    .png()
    .toFile(`./uploads/${imageName}`)
    .then(() => {
      Product.findByIdAndUpdate(
        req.params.id,
        {
          category: req.body.category.name,
          productName: req.body.productName,
          quantity: req.body.quantity,
          image: imageName,
          price: req.body.price,
          description: req.body.description,
        },
        { new: true },
        (err) => {
          if (!err) {
            res.status(200).json();
          } else {
            res.status(400).json({ message: `Update failed` });
          }
        }
      );
    });
};

delete product
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
  // getProductImage,
  updateProduct,
  deleteProduct,
};
