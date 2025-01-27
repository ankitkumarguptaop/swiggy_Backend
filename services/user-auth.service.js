const {userModel} = require("../models");
const jwt = require("jsonwebtoken");
const users = userModel.User;

exports.signUp = async (payload) => {
  const { body } = payload;
  const email = body.email;
  const user = await users.findOne({ email });
  
  if (!user) {
    const signedUser = new users(body);
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
  const { body} = payload;
  const{email ,password} =body;
  
  const user = await users.findOne({ email :email});
  if (user) {
    if (await user.matchPassword(password)) {
      console.log("restaurant")

       return {token : generateToken(user._id) ,user:user}
    } else {
      throw "Unauthorised access!";
    }
  } else {
    throw "Need to register First!";
  }
};
