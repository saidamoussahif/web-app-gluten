const Order = require('../Models/order')

// create order

const createOrder = async (req, res) =>{
	const newOrder = new Order(req.body);
	try {
		const savedOrder = await newOrder.save();
		res.status(200).json(savedOrder);
	} catch (err) {
		res.status(500).json(err);
	}
}

// get order

const getOrder = async (req, res) => {
	try {
		const order = await Order.find();
		res.status(200).json(order);
	} catch (err) {
		res.status(500).json(err);
	}
}

// get order by id

const getOrderById = async (req, res) => {
	try {
		const order = await Order.findById(req.params.id);
		res.status(200).json(order);
	} catch (err) {
		res.status(500).json(err);
	}
}

// delete order

const deleteOrder = async (req, res) => {
	try {
		const order = await Order.findById(req.params.id);
		try {
			await order.deleteOne();
			res.status(200).json("Order has been deleted...");
		} catch (err) {
			res.status(500).json(err);
		}
	} catch (err) {
		res.status(500).json(err);
	}
}

module.exports = {
	createOrder,
	getOrder,
	getOrderById,
	deleteOrder,
}