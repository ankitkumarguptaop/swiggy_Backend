const express = require("express");
const {cartItemControllers} = require("../controllers");
const router = express.Router();

router.get("/", cartItemControllers.getAllItems);
router.get("/:cart_id", cartItemControllers.getItemsInCart);
router.patch("/:item_id", cartItemControllers.updateItemInCart);
router.delete("/:item_id", cartItemControllers.deleteItemFromCart);

module.exports = router;