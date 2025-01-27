const {cartItemModel,cartModel} = require("../models");
const Item = cartItemModel.Item;
const Cart = cartModel.Cart;

exports.createCart = async (payload) => {
  const { restaurant_id } = payload;
  const { body } = payload;
  const { user_id } = body;
  const newCart = new Cart({ user_id, restaurant_id });
  const cart = await newCart.save();
  const cart_id = cart._id;
  const { items } = body;
  let newItems = [];
  newItems = items.map((item) => ({
    ...item,
    cart_id: cart_id,
  }));
  console.log(newItems);

  if (!cart_id || !newItems) {
    throw "All fields are required";
  }
  return await Item.insertMany(newItems);
};

exports.getAllCarts = async () => {
  return await Cart.find({});
};

exports.getCartById = async (payload) => {
  const { cart_id } = payload;
  return await Cart.findById(cart_id);
};

// exports.updateCart = async (payload) => {
//   const { cart_id, body } = payload;
//   return await Cart.findByIdAndUpdate(cart_id, body, { new: true });
// };


exports.deleteCart = async (payload) => {
  const { cart_id } = payload;
  return await Cart.findByIdAndDelete(cart_id);
};



exports.deleteCardddt = async (payload) => {
  const { cart_id } = payload;
  return await Cart.findByIdAndDelete(cart_id);
};
