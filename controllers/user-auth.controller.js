const { userAuthServices } = require("../services");

exports.signUp = async (req, res) => {
  try {
    const user = await userAuthServices.signUp({ body: req.body });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to signup user", error: error });
  }
};

exports.signIn = async (req, res) => {
  try {
    const {token , user } = await userAuthServices.signIn({ body: req.body });
    const cookieOptions = {
      secure: true,
      httpOnly: true,
    };
    res.cookie("jwt",token, cookieOptions);
    res.json({token:token,user:user})
  } catch (error) {
    res.status(500).json({ error: "Failed to signin user", error: error });
  }
};
