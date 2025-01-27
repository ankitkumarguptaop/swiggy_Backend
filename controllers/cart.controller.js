const {cartServices} = require("../services");

exports.createCart = async (req, res) => {
  try {
    const newCart = await cartServices.createCart({
      restaurant_id: req.params.restaurant_id,
      body:req.body
    });
    res.json(newCart);
  } catch (error) {
    res.status(500).json({ error: "Failed to create cart", details: error });
  }
};

exports.getAllCarts = async (req, res) => {
  try {
    const carts = await cartServices.getAllCarts();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch carts", details: error });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await cartServices.getCartById({ cart_id: req.params.cart_id });
    if (!cart) {
      res.status(404).json({ error: "Cart not found" });
    } else {
      res.json(cart);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart", details: error });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await cartServices.updateCart({
      cart_id: req.params.cart_id,
      body: req.body,
    });
    if (!updatedCart) {
      res.status(404).json({ error: "Cart not found" });
    } else {
      res.json(updatedCart);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update cart", details: error });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const deletedCart = await cartServices.deleteCart({ cart_id: req.params.cart_id });
    if (!deletedCart) {
      res.status(404).json({ error: "Cart not found" });
    } else {
      res.json(deletedCart);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete cart", details: error });
  }
};
