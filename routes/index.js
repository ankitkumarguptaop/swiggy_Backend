const express = require("express");
const router = express.Router();
const {jwtUserAuth}=require("../middlewares/user-auth.middleware")
const {jwtRestuarantAuth} =require("../middlewares/restaurant-auth.middleware")

router.use("/users", require("./user-auth.route"));
router.use("/restaurants", require("./restaurant-auth.route"));
router.use("/users",jwtUserAuth,require("./user.route"));
router.use("/carts",jwtUserAuth,require("./cart.route"))
router.use("/restaurants",jwtRestuarantAuth, require("./restaurant.route"));
router.use("/restaurants/menu", jwtRestuarantAuth, require("./menu.route"));
router.use("/restaurants/orders", jwtUserAuth, require("./order.route"));


module.exports = router;
