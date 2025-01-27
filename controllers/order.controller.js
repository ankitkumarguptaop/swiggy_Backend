const { orderService } = require("../services");

exports.createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder({ body: req.body });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById({ orderId: req.params.id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getOrdersByUserId = async (req, res) => {
  try {
    const orders = await orderService.getOrdersByUserId({
      user_id: req.params.user_id,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderService.deleteOrder({
      orderId: req.params.id,
    });
    res.status(200).json(deletedOrder);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


exports.updateOrder = async (req, res) => {
  try {
    const updateOrder = await orderService.updateOrder({
      orderId: req.params.id,
      body:req.body
    });
    res.status(200).json(updateOrder);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};



