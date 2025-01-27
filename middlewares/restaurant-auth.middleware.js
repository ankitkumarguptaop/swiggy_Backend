const Model = require("../models/restaurant.model");
const jwt = require("jsonwebtoken");
const restaruants = Model.Restaurant;

const jwtRestuarantAuth = async (req, res, next) => {
  let token;
   
      try {
        // token = req.headers.authorization.split(" ")[1];
        
        token = req?.cookies?.jwt;
        if (token) {
          console.log("token", token);
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.restaurant = await restaruants.findById(decoded._id).select("-password");
          next();
        } else {
          res.status(401).json({ error: "not authorized no Token" });
        }
      } catch (error) {
        res.status(401).json({ error: "Not authorized" });
      }
    
};
exports.jwtRestuarantAuth = jwtRestuarantAuth;
