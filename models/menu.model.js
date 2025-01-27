const mongoose = require("mongoose");
const { Schema } = mongoose;

const menuSchema = Schema(
  {
    dish_name: {
      type: String,
      required: [true, "DishName not given"],
    },

    price: {
      type: Number,
      required: [true, "Price not given"],
    },

    picture:{type:String , required: [true, 'Pic not given']},

    description: {
      type: String,
      required: [true, "Description not given"],
    },

    rating: {
      type: Number,
      required: [true, "Description not given"],
      min: [0, "Must be at least 0"],
      max: [5, "Must less than or equal 5"],
    },

    restaurant_id: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  },
  { timestamps: true }
);

exports.Menu = mongoose.model("Menu", menuSchema);
