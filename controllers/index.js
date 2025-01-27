const { cartItemServices } = require("../services/index.js");

module.exports = {
    userControllers:require("./user.controller.js"),
    userAuthControllers:require("./user-auth.controller.js"),
    restaurantAuthControllers:require("./restaurant-auth.controller.js"),
    restaurantControllers:require("./restaurant.controller.js"),
    menuControllers:require("./menu.controller.js"),
    cartControllers:require("./cart.controller.js"),
    cartItemControllers:require("./cart-item.controller.js"),
    orderControllers:require("./order.controller.js")
}
  