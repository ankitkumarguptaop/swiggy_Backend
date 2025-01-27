const express = require("express");
const { userControllers } = require("../controllers");
const router = express.Router();

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUser);
router.patch("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

module.exports = router;
