const express = require("express");
const {userAuthControllers} = require("../controllers");
const router = express.Router();

router.post("/signup", userAuthControllers.signUp);
router.post("/signin", userAuthControllers.signIn);

module.exports = router;
