const {restaurantAuthServices}=require("../services")

exports.signUp = async (req, res) => {
  try {
    const restaurantImagePath = req.file ?req.file.path :null
    const user= await restaurantAuthServices.signUp({body:req.body ,restaurantImagePath:restaurantImagePath});
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to signup user"  ,error :error});
  }
  };

exports.signIn = async (req, res) => {
    try {
      const {token , restaurant}= await restaurantAuthServices.signIn({body:req.body});
      res.cookie("jwt",token);
      res.json({token:token,restaurant:restaurant})
    } catch (error) {
      res.status(500).json({ error: "Failed to signin user"  ,error :error});
    }
};