
const { menuServices } = require("../services");

exports.getAllMenu = async (req, res) => {
  try {
    const users = await menuServices.getAllMenu({restaurant_id:req.restaurant._id});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menue",error:error  });
  }
};

exports.getMenu = async (req, res) => {
  try {
  const user = await menuServices.getMenu({id :req.params.id ,restaurant_id:req.restaurant._id});
  res.json(user);
} catch (error) {
    res.status(500).json({ error: "Failed to fetch menue" ,error:error });
  }
};


exports.createMenu = async (req, res) => {
    try {
      const menuImagePath = req.file ?req.file.path :null
        console.log(req.restaurant._id );
      const user = await menuServices.createMenu({ body: req.body ,restaurant_id:req.restaurant._id ,menuImagePath:menuImagePath });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to signup user", error: error });
    }
  };


exports.updateMenu = async (req, res) => {
  try {
    const user = await menuServices.updateMenu({body:req.body , id:req.params.id ,thisRestaurant:req.restaurant});
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update  menue" ,error:error });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const deletedMenu = await menuServices.deleteMenu({id:req.params.id ,thisRestaurant:req.restaurant});
    res.json(deletedMenu);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Menue" ,error:error });
  }
};
