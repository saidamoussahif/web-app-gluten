const Cart = require("../Models/cart");


// add  product to cart

const addToCart = async (req, res) => {
	const newCart = new Cart(req.body);
	try {
	  const savedCart = await newCart.save();
	  res.status(200).json(savedCart);
	} catch (err) {
	  res.status(500).json(err);
	}
  };

// get cart

const getCart = async (req, res) => {
	try {
	  const cart = await Cart.find();
	  res.status(200).json(cart);
	} catch (err) {
	  res.status(500).json(err);
	}
  }

// delete cart

const deleteCart = async (req, res) => {
	try {
	  const cart = await Cart.findById(req.params.id);
	  try {
		await cart.deleteOne();
		res.status(200).json("Cart has been deleted...");
	  } catch (err) {
		res.status(500).json(err);
	  }
	} catch (err) {
	  res.status(500).json(err);
	}
  }

module.exports = {
	addToCart,
	getCart,
	deleteCart,
};