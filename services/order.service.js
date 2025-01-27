const {orderModel} = require("../models");
const Order=orderModel.Order


const createOrder = async (payload) => {
  const {body}=payload
  const {user_id, restaurant_id, cart_id, total_price}=body;
  try {
    const newOrder = new Order({
      user_id,
      restaurant_id,
      cart_id,
      total_price,
    });

    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    throw ("Error creating order: " + error.message);
  }
};

const getOrderById = async (payload) => {

  const {orderId}=payload
  try {
    const order = await Order.findById(orderId).populate("items");
    if (!order) throw new Error("Order not found");
    return order;
  } catch (error) {
    throw ("Error fetching order: " + error);
  }
};

const getOrdersByUserId = async (payload) => {
  try {
    const{user_id} =payload
    const orders = await Order.find({ user_id }).populate("items");
    return orders;
  } catch (error) {
    throw ("Error fetching orders: " + error);
  }
};


const deleteOrder = async (payload) => {
  const {orderId}=payload
  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) throw new Error("Order not found");
    return deletedOrder;
  } catch (error) {
    throw ("Error deleting order: " + error);
  }
};

module.exports = {
  createOrder,
  getOrderById,
  getOrdersByUserId,
  deleteOrder,
};
