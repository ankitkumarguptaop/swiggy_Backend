const { orderServices } = require("../services");

exports.createOrder = async (req, res) => {
  try {
    const order = await orderServices.createOrder({ body: req.body ,cart_id:req.params.id });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await orderServices.getOrderById({ orderId: req.params.id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

exports.getOrdersByUserId = async (req, res) => {
  try {
    const orders = await orderServices.getOrdersByUserId({
      user_id: req.params.user_id,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({error: error.message });
  }
};


exports.getAllOrders= async (req, res) => {

  try {
    const orders = await orderServices.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderServices.deleteOrder({
      orderId: req.params.id,
    });
    res.status(200).json(deletedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};


exports.updateOrder = async (req, res) => {
  try {
    const updateOrder = await orderServices.updateOrder({
      orderId: req.params.id,
      body:req.body
    });
    res.status(200).json(updateOrder);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};



