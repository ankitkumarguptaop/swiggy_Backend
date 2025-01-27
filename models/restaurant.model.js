const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const restaurantSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name not given"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email not given"],
    },
    password: {
      type: String,
      required: [true, "Password not given"],
    },
    // phoneNo: {
    //   type: Number,
    //   required: [true, "Phone no not given"],
    // },
     picture:{type:String , required: [true, 'Pic not given'] },
    
  },
  { timestamps: true }
);

restaurantSchema.methods.matchPassword = async function (enteredPassword) {
  console.log(enteredPassword, this.password);
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (err) {
    throw "bcrypt error";
  }
};

restaurantSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

exports.Restaurant = mongoose.model("Restaurant", restaurantSchema);
