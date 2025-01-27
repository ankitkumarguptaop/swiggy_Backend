const { orderService } = require("../services");
const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder({ body: req.body });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById({ orderId: req.params.id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrdersByUserId = async (req, res) => {
  try {
    const orders = await orderService.getOrdersByUserId({
      user_id: req.params.user_id,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderService.deleteOrder({
      orderId: req.params.id,
    });
    res.status(200).json(deletedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrderById,
  getOrdersByUserId,
  deleteOrder,
};
