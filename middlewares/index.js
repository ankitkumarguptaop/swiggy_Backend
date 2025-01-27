
module.exports = {
    userAuthMiddlewares: require("./user-auth.middleware"),
    restaurantAuthMiddlewares : require("./restaurant-auth.middleware"),
    restaurantPicUploadMiddleware:require("./upload-restaurant-picture.middleware"),
    menuePicUploadMiddleware:require("./upload-menu-picture.middleware")
  };
  