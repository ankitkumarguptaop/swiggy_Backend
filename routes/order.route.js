const express = require("express");
const {orderControllers} = require("../controllers");
const router = express.Router();

router.get("user/:id", orderControllers.getOrdersByUserId);
router.get("/",orderControllers.getAllOrders)
router.get("/:id", orderControllers.getOrderById);
router.post("/:id",orderControllers.createOrder)
router.patch("/:id", orderControllers.updateOrder);
router.delete("/:id", orderControllers.deleteOrder);

module.exports = router;
