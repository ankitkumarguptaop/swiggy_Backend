
const { userServices } = require("../services");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users",error:error  });
  }
};

exports.getUser = async (req, res) => {
  try {
  const user = await userServices.getUser({id :req.params.id});
  res.json(user);
} catch (error) {
    res.status(500).json({ error: "Failed to fetch users" ,error:error });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const user = await userServices.updateUser({body:req.body , id:req.params.id ,user:req.user});
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update " ,error:error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await userServices.deleteUser({id:req.params.id ,thisUser:req.user});
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete " ,error:error });
  }
};
