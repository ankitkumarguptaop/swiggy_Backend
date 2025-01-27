const { restaurantServices } = require("../services");

exports.getAllRestaurants = async (req, res) => {
  try {
    const users = await restaurantServices.getAllRestaurants();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users", error:error  });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
  const user = await restaurantServices.getRestaurant({id :req.params.id});
  res.json(user);
} catch (error) {
    res.status(500).json({ error: "Failed to fetch users" ,error:error });
  }
};


exports.updateRestaurant = async (req, res) => {

  try {
    const updatedRestaurant = await restaurantServices.updateRestaurant({body:req.body , id:req.params.id ,thisRestaurant:req.restaurant});
    res.json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ error: "Failed to update " ,error:error });
  }
};

exports.deleteRestaurant = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRestaurant = await restaurantServices.deleteRestaurant({thisRestaurant:req.restaurant,id:req.params.id});
    res.json(deletedRestaurant);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete " ,error:error });
  }
};
