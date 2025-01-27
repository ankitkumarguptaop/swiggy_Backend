const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    restaurant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    // cart_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Cart",
    //   required: true,
    // },
    status: {
      type: String,
      enum: ["Success", "Pending", "OutOfDelivery"],
    },
    total_price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    items: [
      {
        dish_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

exports.Order = mongoose.model("Order", orderSchema);
