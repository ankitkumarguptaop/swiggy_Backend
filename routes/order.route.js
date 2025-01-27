const express = require("express");
const {restaurantControllers} = require("../controllers");
const router = express.Router();

router.get("/", restaurantControllers.getAllRestaurants);
router.get("/:id", restaurantControllers.getRestaurant);
router.patch("/:id", restaurantControllers.updateRestaurant);
router.delete("/:id", restaurantControllers.deleteRestaurant);

module.exports = router;
