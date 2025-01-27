const express = require("express");
const {cartItemControllers} = require("../controllers");
const router = express.Router();

router.get("/", cartItemControllers.ge);
router.get("/:id", cartItemControllers.getCartById);
router.post("/:restaurant_id",cartItemControllers.createCart);
router.patch("/:id", cartItemControllers.updateCart);
router.delete("/:id", cartItemControllers.deleteCart);

module.exports = router;