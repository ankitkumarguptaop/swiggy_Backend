const express = require("express");
const {restaurantAuthControllers } = require("../controllers");
const router = express.Router();
const {uploadRestaurantPic} =require("../middlewares/upload-restaurant-picture.middleware")
router.post("/signup",  uploadRestaurantPic().single("picture"), restaurantAuthControllers.signUp);
router.post("/signin", restaurantAuthControllers.signIn);

module.exports = router;