const express = require("express");
const {menuControllers} = require("../controllers");
const{uploadMenuPic} =require("../middlewares/upload-menu-picture.middleware")
const router = express.Router();

router.get("/", menuControllers.getAllMenu);
router.get("/:id", menuControllers.getMenu);
router.post("/", uploadMenuPic().single("picture"),menuControllers.createMenu)
router.patch("/:id", menuControllers.updateMenu);
router.delete("/:id", menuControllers.deleteMenu);

module.exports = router;
