const { orderModel } = require("../models");
const { cartItemModel } = require("../models");
const { cartModel } = require("../models");
const Cart = cartModel.Cart;
const Item = cartItemModel.Item;
const Order = orderModel.Order;

exports.createOrder = async (payload) => {
  const { body, cart_id } = payload;
  const { user_id, restaurant_id, total_price, status } = body;
  const allItemsBeforeDelete = await Item.find({ cart_id: cart_id }).select(
    "price",
    "quantity",
    "dish_id"
  );

  try {
    const newOrder = new Order({
      user_id,
      restaurant_id,
      total_price,
      status,
      items: [allItemsBeforeDelete],
    });

    const savedOrder = await newOrder.save();
    await Item.deleteMany({ cart_id: cart_id });
    await Cart.findByIdAndDelete({ _id: cart_id });
    return savedOrder;
  } catch (error) {
    throw "Error creating order: " + error.message;
  }
};

exports.getOrderById = async (payload) => {
  const { orderId } = payload;
  try {
    const order = await Order.findById(orderId).populate("items");
    if (!order) throw new Error("Order not found");
    return order;
  } catch (error) {
    throw "Error fetching order: " + error;
  }
};

exports.getOrdersByUserId = async (payload) => {
  try {
    const { user_id } = payload;
    const orders = await Order.find({ user_id }).populate("items");
    return orders;
  } catch (error) {
    throw "Error fetching orders: " + error;
  }
};

exports.deleteOrder = async (payload) => {
  const { orderId } = payload;
  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) throw new Error("Order not found");
    return deletedOrder;
  } catch (error) {
    throw "Error deleting order: " + error;
  }
};

exports.updateOrder = async (payload) => {
  const { orderId, body } = payload;
  const { status } = body;
  try {
    const updatedOrderStatus = await Order.findByIdAndUpdate(
      { _id: orderId },
      { status: status },
      { new: true }
    );
    return updatedOrderStatus;
  } catch (error) {
    throw "Error updating order: " + error;
  }
};

