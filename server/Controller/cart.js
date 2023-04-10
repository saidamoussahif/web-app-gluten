const Cart = require("../Models/cart");

// add  product to cart

const addItemToCart = async (req, res) => {
  //   Cart.findOne(
  //     { userId: req.body.userId, "products.productId": req.body.productId },
  //     (err, cart) => {
  //       if (cart) {
  //         // if cart already exists then update the quantity
  //         Cart.findOneAndUpdate(
  //           { userId: req.body.userId, "products.productId": req.body.productId },
  //           {
  //             $inc: {
  //               "products.$.quantity": req.body.quantity,
  //             },
  //           }
  //         ).exec((err, _cart) => {
  //           if (err) return res.status(400).json({ err });
  //           if (_cart) {
  //             return res.status(201).json({ cart: _cart });
  //           }
  //         });
  //       } else {
  //         // if cart does not exist then create a new cart
  //         const cart = new Cart({
  //           userId: req.body.userId,
  //           products: req.body.products,
  //         });
  //         cart.save((err, cart) => {
  //           if (err) return res.status(400).json({ err });
  //           if (cart) {
  //             return res.status(201).json({
  // 			message:
  // 			"Product added to cart successfully",
  // 			cart: cart
  // 			});
  //           }
  //         });
  //       }
  //     }
  //   );

  Cart.findOne({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      // if cart already exists update cart by quantity

	  const product =  req.body.cartItems.product;


      const item = cart.cartItems.find(crt => crt.product == product);

      if(item) {
        Cart.findOneAndUpdate({ "user": req.user._id, "cartItems.product": product },
          {
            "$set" : {
              "cartItems.$": {
				...req.body.cartItems,	
				quantity: item.quantity + req.body.cartItems.quantity,
			  }
            }
          })
		  .exec((error, _cart) => {
          if (error) return res.status(400).json({ error });
          if (_cart) {
            return res.status(201).json({ cart: _cart });
          }
        })



      } else {
        Cart.findOneAndUpdate( { user: req.user._id }, {
           "$push": {
              "cartItems": req.body.cartItems,
            },
          }
        ).exec((error, _cart) => {
          if (error) return res.status(400).json({ error });
          if (_cart) {
            return res.status(201).json({ cart: _cart });
          }
        });
      }

      //   res.status(200).json({message: cart});
    } else {
      // if cart not exist create a new cart
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });
      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          return res.status(201).json({ cart });
        }
      });
    }
  });
};

// get cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete cart
const deleteCartItem = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addItemToCart,
  getCart,
  deleteCartItem,
};
