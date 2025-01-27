const express = require("express");
const {cartControllers} = require("../controllers");
const router = express.Router();

router.get("/", cartControllers.getAllCarts);
router.get("/:id", cartControllers.getCartById);
router.post("/:restaurant_id",cartControllers.createCart);
router.patch("/:id", cartControllers.updateCart);
router.delete("/:id", cartControllers.deleteCart);

module.exports = router;
