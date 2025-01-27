const express = require("express");
const {orderControllers} = require("../controllers");
const router = express.Router();

router.get("/", orderControllers.getOrdersByUserId);
router.get("/:id", orderControllers.getOrderById);
router.post("/",orderControllers.createOrder)
router.patch("/:id", orderControllers.updateOrder);
router.delete("/:id", orderControllers.deleteOrder);

module.exports = router;
