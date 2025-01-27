const {restaurantModel} = require("../models");
const restaurants = restaurantModel.Restaurant;
const ObjectID = require("mongodb").ObjectId
exports.getAllRestaurants = async () => {
  if (await restaurants.find({})) {
    return await restaurants.find({});
  } else {
    throw "restaurant is not there";
  }
};

exports.getRestaurant = async (payload) => {
  const { id } = payload;
  if (await restaurants.findById(id)) {
    return await restaurants.findById(id);
  } else {
    throw "restaurant not registered";
  }
};

exports.updateRestaurant = async (payload) => {
  let { body, id, thisRestaurant } = payload;
  id =new ObjectID(id)
  if ((await restaurants.findById(id) && (id).equals(thisRestaurant._id) )  ) {
    return await restaurants.findOneAndUpdate({ _id: id }, body, {
      returnDocument: "after",
    });
  } else {
    throw "you dont have access or restaurant doesnt exist";
  }
};

exports.deleteRestaurant = async (payload) => {
  let { id, thisRestaurant } = payload;
  id =new ObjectID(id)
  if (  (await restaurants.findById(id)) && (id).equals(thisRestaurant._id) ) {
    return await restaurants.findOneAndDelete({ _id: id });
  } else {
    throw "you dont have access or restaurant doesnt exist";
  }
};
