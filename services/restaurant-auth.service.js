const {restaurantModel} = require("../models");
const restaurants = restaurantModel.Restaurant;
const jwt = require("jsonwebtoken");

exports.signUp = async (payload) => {
  const { body ,restaurantImagePath } = payload;
  const email = body.email;
  const restaurant = await restaurants.findOne({ email });


  if (!restaurant) {
    const signedUser = new restaurants({...body,picture:restaurantImagePath});
    return await signedUser.save();
  } else {
    throw "User already signup!";
  }
};

function generateToken(_id) {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

exports.signIn = async (payload) => {
  const { body } = payload;
  const { email, password } = body;
  const restaurant = await restaurants.findOne({ email: email });

  if (restaurant) {
    if (await restaurant.matchPassword(password)) {
      console.log("restaurant");
      return { token: generateToken(restaurant._id), restaurant: restaurant };
    } else {
      throw "Unauthorised access!";
    }
  } else {
    throw "Need to register First!";
  }
};
